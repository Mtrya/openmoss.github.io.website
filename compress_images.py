#!/usr/bin/env python3
"""
使用说明：
1. 安装依赖：`python3 -m pip install --user pillow`
2. 示例命令：`python3 compress_images.py --root assets/img --target-kb 100 --backup`
   - `--backup` 为每张图片生成 `.bak` 备份
   - `--dry-run` 仅预览压缩结果，不写回文件
3. 支持 JPG/PNG/WebP/BMP/TIFF，必要时会自动缩放以满足目标大小。
"""

import argparse
import io
import math
import shutil
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, Optional, Tuple

from PIL import Image, ImageFile

Image.MAX_IMAGE_PIXELS = None
ImageFile.LOAD_TRUNCATED_IMAGES = True

try:
    RESAMPLE = Image.Resampling.LANCZOS  # type: ignore[attr-defined]
except AttributeError:
    RESAMPLE = Image.LANCZOS  # type: ignore[attr-defined]

SUPPORTED_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tiff", ".tif"}


@dataclass
class CompressResult:
    original_size: int
    final_size: int
    quality: int
    resized: bool
    scale: float
    changed: bool


def iter_images(root: Path) -> Iterable[Path]:
    for path in sorted(root.rglob("*")):
        if not path.is_file():
            continue
        if path.suffix.lower() not in SUPPORTED_EXTS:
            continue
        yield path


def detect_format(path: Path) -> str:
    suffix = path.suffix.lower()
    if suffix in {".jpg", ".jpeg"}:
        return "JPEG"
    if suffix == ".png":
        return "PNG"
    if suffix == ".webp":
        return "WEBP"
    if suffix in {".bmp"}:
        return "BMP"
    if suffix in {".tiff", ".tif"}:
        return "TIFF"
    return "PNG"


def encode_image(image: Image.Image, fmt: str, quality: int) -> bytes:
    buf = io.BytesIO()
    save_kwargs = {}

    if fmt == "JPEG":
        if image.mode not in ("RGB", "L"):
            image = image.convert("RGB")
        save_kwargs.update({"quality": quality, "optimize": True, "progressive": True})
    elif fmt == "WEBP":
        if image.mode not in ("RGB", "RGBA", "L"):
            if "A" in image.getbands():
                image = image.convert("RGBA")
            else:
                image = image.convert("RGB")
        save_kwargs.update({"quality": quality, "method": 6})
    elif fmt == "PNG":
        if image.mode not in ("RGB", "RGBA", "L", "P"):
            if "A" in image.getbands():
                image = image.convert("RGBA")
            else:
                image = image.convert("RGB")
        max_colors = max(2, min(256, int(2 + (quality / 100) * 254)))
        if image.mode not in ("P", "L"):
            image = image.convert("P", palette=Image.ADAPTIVE, colors=max_colors)
        save_kwargs.update({"optimize": True})
    elif fmt == "TIFF":
        if image.mode not in ("RGB", "RGBA", "L"):
            image = image.convert("RGB")
        save_kwargs.update({"compression": "tiff_lzw"})
    elif fmt == "BMP":
        if image.mode not in ("RGB", "L"):
            image = image.convert("RGB")
    else:
        save_kwargs.update({"quality": quality})

    image.save(buf, fmt, **save_kwargs)
    return buf.getvalue()


def try_quality(
    image: Image.Image, fmt: str, target_bytes: int, quality_floor: int, quality_ceiling: int
) -> Tuple[Optional[bytes], bytes, int, int]:
    low = quality_floor
    high = quality_ceiling
    best_payload: Optional[bytes] = None
    best_quality = low
    fallback_payload = encode_image(image, fmt, low)
    fallback_quality = low

    while low <= high:
        mid = (low + high) // 2
        payload = encode_image(image, fmt, mid)
        size = len(payload)
        if size <= target_bytes:
            best_payload = payload
            best_quality = mid
            low = mid + 1
        else:
            fallback_payload = payload
            fallback_quality = mid
            high = mid - 1

    return best_payload, fallback_payload, best_quality, fallback_quality


def compress_image(
    path: Path,
    target_bytes: int,
    quality_floor: int,
    quality_ceiling: int,
    min_scale: float,
) -> CompressResult:
    original_size = path.stat().st_size
    fmt = detect_format(path)
    image = Image.open(path)
    image.load()

    working = image
    scale = 1.0
    resized = False
    last_payload = path.read_bytes()
    last_quality = quality_floor

    for _ in range(12):
        best_payload, fallback_payload, best_q, fallback_q = try_quality(
            working, fmt, target_bytes, quality_floor, quality_ceiling
        )
        candidate_payload = best_payload or fallback_payload
        candidate_quality = best_q if best_payload is not None else fallback_q

        if len(candidate_payload) <= target_bytes:
            if candidate_payload != last_payload:
                path.write_bytes(candidate_payload)
                return CompressResult(
                    original_size=original_size,
                    final_size=len(candidate_payload),
                    quality=candidate_quality,
                    resized=resized,
                    scale=scale,
                    changed=True,
                )
            return CompressResult(
                original_size=original_size,
                final_size=len(candidate_payload),
                quality=candidate_quality,
                resized=resized,
                scale=scale,
                changed=False,
            )

        last_payload = candidate_payload
        last_quality = candidate_quality

        current_size = len(candidate_payload)
        if working.width <= 64 or working.height <= 64:
            break

        ratio = math.sqrt(target_bytes / current_size) * 0.95
        ratio = min(0.9, ratio)
        ratio = max(ratio, min_scale)

        new_width = max(32, int(working.width * ratio))
        new_height = max(32, int(working.height * ratio))

        if new_width == working.width and new_height == working.height:
            new_width = max(32, int(working.width * 0.85))
            new_height = max(32, int(working.height * 0.85))

        working = working.resize((new_width, new_height), RESAMPLE)
        scale *= new_width / image.width
        resized = True

    if len(last_payload) < original_size:
        path.write_bytes(last_payload)
        return CompressResult(
            original_size=original_size,
            final_size=len(last_payload),
            quality=last_quality,
            resized=resized,
            scale=scale,
            changed=True,
        )

    return CompressResult(
        original_size=original_size,
        final_size=original_size,
        quality=last_quality,
        resized=resized,
        scale=1.0,
        changed=False,
    )


def human_size(num_bytes: int) -> str:
    if num_bytes < 1024:
        return f"{num_bytes}B"
    kb = num_bytes / 1024
    if kb < 1024:
        return f"{kb:.1f}KB"
    mb = kb / 1024
    return f"{mb:.2f}MB"


def main(argv: Optional[Iterable[str]] = None) -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--root",
        type=Path,
        default=Path("assets/img"),
        help="根目录（默认 assets/img）",
    )
    parser.add_argument(
        "--target-kb",
        type=int,
        default=100,
        help="目标大小（KB），默认 100",
    )
    parser.add_argument(
        "--quality-floor",
        type=int,
        default=30,
        help="最低质量（默认 30）",
    )
    parser.add_argument(
        "--quality-ceiling",
        type=int,
        default=92,
        help="最高质量（默认 92）",
    )
    parser.add_argument(
        "--backup",
        action="store_true",
        help="压缩前为每个文件创建 .bak 备份",
    )
    parser.add_argument(
        "--min-scale",
        type=float,
        default=0.5,
        help="单次最小缩放比例（默认 0.5）",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="仅输出压缩结果，不写回文件",
    )

    args = parser.parse_args(list(argv) if argv is not None else None)

    root = args.root.resolve()
    if not root.exists():
        print(f"目录 {root} 不存在", file=sys.stderr)
        return 1

    target_bytes = args.target_kb * 1024
    total_saved = 0
    changed_files = 0

    for image_path in iter_images(root):
        original_size = image_path.stat().st_size
        if original_size <= target_bytes:
            print(f"[跳过] {image_path} 已小于目标（{human_size(original_size)}）")
            continue

        if args.backup:
            backup_path = image_path.with_suffix(image_path.suffix + ".bak")
            if not backup_path.exists():
                shutil.copy2(image_path, backup_path)

        if args.dry_run:
            image = Image.open(image_path)
            image.load()
            fmt = detect_format(image_path)
            best_payload, fallback_payload, best_q, fallback_q = try_quality(
                image, fmt, target_bytes, args.quality_floor, args.quality_ceiling
            )
            payload = best_payload or fallback_payload
            size = len(payload)
            ratio = size / original_size
            info = "质量" + str(best_q if best_payload else fallback_q)
            print(
                f"[试算] {image_path} {human_size(original_size)} -> {human_size(size)} "
                f"({ratio:.1%})，{info}"
            )
            continue

        result = compress_image(
            image_path,
            target_bytes=target_bytes,
            quality_floor=args.quality_floor,
            quality_ceiling=args.quality_ceiling,
            min_scale=args.min_scale,
        )

        if result.changed:
            saved = result.original_size - result.final_size
            total_saved += max(saved, 0)
            changed_files += 1
            action = "压缩+缩放" if result.resized else "压缩"
            print(
                f"[完成] {image_path} {human_size(result.original_size)} -> "
                f"{human_size(result.final_size)}（{action}, 质量 {result.quality}, 缩放 {result.scale:.2f}x）"
            )
        else:
            print(
                f"[未变] {image_path} 无法在参数内压缩至 {args.target_kb}KB 以下，保留原图"
            )

    print(
        f"共处理 {changed_files} 个文件，节省 {human_size(total_saved)}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

