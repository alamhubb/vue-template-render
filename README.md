# vue-template-render

### 说明
将vue的template语法字符串渲染为dom，返回dom，可获得html

### introduce
Render the vue template syntax string as dom, return dom, and get html

### 演示项目参考
* [qing-markdown 演示项目](https://github.com/qinkaiyuan/qing-markdown#%E6%BC%94%E7%A4%BA%E9%A1%B9%E7%9B%AE)

### npm 安装
```bash
npm install qing-markdown-loader -D
```

### 快速上手
```bash
# 配置 loader，vue-cli 方式，vue.config.js 文件
chainWebpack: config => {
  config.module
    .rule('md').test(/\.md$/).use('md-loader').loader('qing-markdown-loader')
}
```

```javascript
// hello.md文件内内容为：# hello world
import hello from './hello.md'

//# 输出 # hello world
console.log(hello)
```

### 结合其他项目使用
* [qing-markdown](https://github.com/qinkaiyuan/qing-markdown#qing-markdown) Vue Markdown 组件，可以将本地或远程 .md 文件以及 markdown 字符串解析为 HTML 显示
