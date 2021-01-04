# Xdbin-static-template

生成 xdbin.com 静态页面模板的 NPM 命令行工具
模板基于 `create-react-app`, 依赖于：

```
"env-cmd": "^9.0.3",
"isomorphic-fetch": "^3.0.0",
"moment": "^2.29.1",
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-loadable": "^5.5.0",
"react-router": "^5.0.1",
"react-router-dom": "^5.0.1",
"react-scripts": "3.1.1"
```


## 使用说明

1. 全局安装npm包

```
npm install xdbin-static-template@latest -g

-p <path> 可以修改项目生成目录
```

2. 切换到指定目录，执行 `xdbin-start create <name>` 创建项目
3. 安装依赖，执行 `npm run start`，浏览器打开 [http://localhost:3000](http://localhost:3000) 查看
