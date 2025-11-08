#!/bin/bash
# === 自动推送 GitHub 网页脚本 ===

# 进入项目目录（注意路径改成你自己的）
cd ~/Desktop/testHomepage || exit

# 提交并推送
git add .
git commit -m "auto update: $(date '+%Y-%m-%d %H:%M')"
git push origin main

echo "✅ 已成功推送到 GitHub Pages！请等待 1-2 分钟网页自动更新。"
