# xdbin-static-template

![npm version](https://img.shields.io/npm/v/xdbin-static-template) ![downloads](https://img.shields.io/npm/dm/xdbin-static-template)

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

xdbin-static create my-web -t 我的网站

-v 查看版本信息
-t <title> 项目标题
-p <path> 可以修改项目生成目录
```

2. 切换到指定目录，执行 `xdbin-static create <name>` 创建项目
3. 安装依赖，执行 `npm run start`，浏览器打开 [http://localhost:3000](http://localhost:3000) 查看

## 项目截图

![暗色模式](https://cdn.xdbin.com/xdbin-static-template/shot/dark.png)

## 使用案例

[生命游戏：生命游戏的 JS 实现](https://gameoflife.xdbin.com)  
[微博热搜：微博热搜趋势](https://weibo-hot.xdbin.com)  
[自习室：孤独之心俱乐部，一个人发呆的地方](https://room.xdbin.com)
