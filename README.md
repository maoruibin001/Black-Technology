# 租车M站前端工程

## 目录结构
```
+coverage   单元测试结果目录
+src        源代码目录
+test       单元测试目录

```

## 注意事项
* JS统一使用ES6/ES5语法
* 第三方库，例如mocha和istanbul 需要全局安装

## 第三方库参考文档
* mocha http://mochajs.org/
* istanbul https://github.com/gotwarlost/istanbul

## 依赖安装
* 安装node
* 安装全局的npm
* 安装全局mocha、istanbul
* 安装工程依赖
```
cd path/to/project
npm install
```

## 测试
* 启用单元测试会生成一个coverage文件夹，存放测试结果文件，当然，控制台也会展示简略信息。
```
npm run test
```

```
