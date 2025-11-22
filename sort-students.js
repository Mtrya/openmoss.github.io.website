// 对博士生和硕士生列表进行字典序排序的脚本
const fs = require('fs');
const path = require('path');

// 读取 team-data.js 文件
const filePath = path.join(__dirname, 'assets/js/team-data.js');
let content = fs.readFileSync(filePath, 'utf8');

// 提取博士生数组
const phdMatch = content.match(/phdStudents:\s*\[([\s\S]*?)\s*\],\s*\/\/ 硕士研究生/);
const phdArrayStr = phdMatch ? phdMatch[1] : '';

// 提取硕士生数组
const masterMatch = content.match(/masterStudents:\s*\[([\s\S]*?)\s*\],\s*\/\/ 本科生/);
const masterArrayStr = masterMatch ? masterMatch[1] : '';

// 解析学生对象的函数
function parseStudents(arrayStr) {
    const students = [];
    const regex = /\{\s*id:\s*'([^']+)',\s*name:\s*\{\s*zh:\s*'([^']+)',\s*en:\s*'([^']+)'\s*\},\s*photo:\s*'([^']+)'(?:,\s*homepage:\s*'([^']+)')?\s*\}/g;
    
    let match;
    while ((match = regex.exec(arrayStr)) !== null) {
        students.push({
            id: match[1],
            nameZh: match[2],
            nameEn: match[3],
            photo: match[4],
            homepage: match[5] || null,
            original: match[0]
        });
    }
    return students;
}

// 格式化学生对象为代码字符串
function formatStudent(student, indent = '        ') {
    const homepageStr = student.homepage ? `, homepage: '${student.homepage}'` : '';
    return `${indent}{ id: '${student.id}', name: { zh: '${student.nameZh}', en: '${student.nameEn}' }, photo: '${student.photo}'${homepageStr} }`;
}

// 解析学生列表
const phdStudents = parseStudents(phdArrayStr);
const masterStudents = parseStudents(masterArrayStr);

console.log(`找到 ${phdStudents.length} 个博士生`);
console.log(`找到 ${masterStudents.length} 个硕士生`);

// 按英文名字典序排序
phdStudents.sort((a, b) => a.nameEn.localeCompare(b.nameEn));
masterStudents.sort((a, b) => a.nameEn.localeCompare(b.nameEn));

// 生成排序后的代码
console.log('\n========== 排序后的博士生列表 ==========\n');
console.log('    phdStudents: [');
phdStudents.forEach((student, index) => {
    const comma = index < phdStudents.length - 1 ? ',' : '';
    console.log(formatStudent(student) + comma);
});
console.log('    ],\n');

console.log('\n========== 排序后的硕士生列表 ==========\n');
console.log('    masterStudents: [');
masterStudents.forEach((student, index) => {
    const comma = index < masterStudents.length - 1 ? ',' : '';
    console.log(formatStudent(student) + comma);
});
console.log('    ],\n');

// 询问是否要写入文件
console.log('\n提示: 将上面的排序结果复制到 team-data.js 中对应位置');
console.log('或者运行: node sort-students.js > sorted-output.txt');

