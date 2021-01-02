#!/usr/bin/env node
const program = require('commander');
const fs = require('fs');
const path = require('path');
 
program
  .version('0.1.0')
  .option('-p, --path [type]', '项目路径')
  .option('-t, --title [type]', '标题')
  .parse(process.argv);

// 项目名称
let title = 'xdbin-static-template';
if (program.title) {
  title = program.title
}

// 项目生成的路径
let projectPath = path.resolve('./');
if (program.path) {
  projectPath = path.resolve(program.path)
}

projectPath += `/${title}`

console.log('项目名称：%s', title)
console.log('项目路径：%s', projectPath)

var copy = function( src, dst ){
  // 读取目录中的所有文件/目录
  fs.readdir( src, function( err, paths ){
      if( err ){
          throw err;
      }

      paths.forEach(function( path ){
          var _src = src + '/' + path,
              _dst = dst + '/' + path;      

          fs.stat(_src, function(err, st){
              if( err ){
                  throw err;
              }

              // 判断是否为文件
              if(st.isFile()){
                  // 创建读取流
                  fs.readFile(_src, {flag: 'r+', encoding: 'utf8'}, (err, data) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    data = data.replace(/%title%/g, title)
                    fs.writeFile(_dst, data, (err) => {
                      if (err) {
                        console.error(err);
                        return;
                      }
                    })
                  })
                  // readable = fs.createReadStream( _src );
                  // // 创建写入流
                  // writable = fs.createWriteStream( _dst ); 
                  // // 通过管道来传输流
                  // readable.pipe( writable );
                  // console.log('成功创建：%s', _dst);
              }
              // 如果是目录则递归调用自身
              else if( st.isDirectory() ){
                  exists( _src, _dst, copy );
              }
          });
      });
  });
};
// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
var exists = function( src, dst, callback ){
  if (fs.existsSync(dst)) {
    callback( src, dst );
  } else{
    fs.mkdir( dst, function(){
        callback( src, dst );
    });
  }
};

// 复制目录
exists(path.join(__dirname, 'static'), projectPath, copy);
console.log('项目构建成功，你可以按下面步骤初始化👇')
console.log('')
console.log('  [1] cd %s 切换到项目根目录', title)
console.log('  [2] npm install 安装NPM依赖')
console.log('  [3] npm run start 运行')
console.log('')
console.log('访问 localhost:3000 查看')
