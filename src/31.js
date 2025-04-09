// 读取文件内容
const fs = require('fs');
const path = require('path');

const fileContent = fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf8');

// 解析文件内容，假设每个元素都是一个字符串数组
const lines = fileContent.split('\n').map(line => line.trim());

// 创建文件对象
const file = {
  content: '',
  lines: [],
};

lines.forEach((line) => {
  const trimmedLine = line.trim();
  if (trimmedLine && !trimmedLine.startsWith('#') && !trimmedLine.startsWith('.')) {
    // 分割字符串并创建一个数组
    const parts = trimmedLine.split(/\s+/);
    file.content += JSON.stringify(parts, null, 2) + '\n';
    file.lines.push(parts[0]);
  }
});

// 将文件内容写入文件
fs.writeFileSync('output.txt', file.content);

console.log('File content has been written to "output.txt".');
