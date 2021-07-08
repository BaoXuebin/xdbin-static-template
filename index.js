#!/usr/bin/env node
const program = require('commander');
const fs = require('fs');
const path = require('path');

// 静态模板文件目录
const fromFile = path.join(__dirname, 'static')
// 项目名称
let projectName = 'xdbin-static-template';
let projectTitle = 'helloworld';
// 项目生成的路径
let projectPath = path.resolve('./');

program
  .command('create <project-name>')
  .description('create new project')
  .action((name) => {
    projectName = name;
    projectTitle = name;
  });

program
  .version('1.0.4', '-v, --version')
  .option('-t, --title [type]', 'project title')
  .option('-p, --path [type]', 'project path')
  .parse(process.argv);

// 项目路径
if (program.path) {
  projectPath = path.resolve(program.path)
}
// 项目标题
if (program.title) {
  projectTitle = program.title
}

projectPath += `/${projectName}`

console.log(`Project name is [${projectName}].`)
console.log(`Project title is [${projectTitle}].`)
console.log(`Project path is [${projectPath}].`)

var copy = function (src, dst) {
  // 读取目录中的所有文件/目录
  fs.readdir(src, function (err, paths) {
    if (err) {
      throw err;
    }

    paths.forEach(function (path) {
      var _src = src + '/' + path,
        _dst = dst + '/' + path;

      fs.stat(_src, function (err, st) {
        if (err) {
          throw err;
        }
        // 判断是否为文件
        if (st.isFile()) {
          // 创建读取流
          fs.readFile(_src, { flag: 'r+', encoding: 'utf8' }, (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            data = data.replace(/%project_name%/g, projectName)
            data = data.replace(/%project_title%/g, projectTitle)
            fs.writeFile(_dst, data, (err) => {
              if (err) {
                console.error(err);
                return;
              }
            })
          })
        }
        // 如果是目录则递归调用自身
        else if (st.isDirectory()) {
          exists(_src, _dst, copy);
        }
      });
    });
  });
};
// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
var exists = function (src, dst, callback) {
  if (fs.existsSync(dst)) {
    callback(src, dst);
  } else {
    fs.mkdir(dst, function () {
      callback(src, dst);
    });
  }
};

// 复制目录
exists(fromFile, projectPath, copy);
console.log('Success to create new project:')
console.log('')
console.log(`  1. cd ${projectName}`)
console.log('  2. npm install')
console.log('  3. npm run start')
console.log('')
console.log('Open http://localhost:3000')
