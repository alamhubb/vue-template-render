# vue-template-render

### 说明
将vue的template语法字符串渲染为dom，返回dom，可获得html

### introduce
将vue的template语法字符串渲染为dom，返回dom，可获得html
Render the vue template syntax string as dom, return dom, and get html

### npm 安装
```bash
npm install vue-template-render
```

### 快速上手
```javascript
//# es6导入
// import TemplateRender from 'vue-template-render'
//# cmd导入
const TemplateRender = require('vue-template-render')

//no options
const vueTemplate1 = `
    <div><span v-for="i in 10">{{ i }}</span></div>
    `
//# 输出 dom
console.log(TemplateRender.render(vueTemplate1))
//# 输出 html
console.log(TemplateRender.render(vueTemplate1).outerHTML)

//options
const vueTemplate2 = `
    <div><span v-for="i in 10">{{msg}} --- {{ i }}</span></div>
    `

//# 输出 dom
console.log(TemplateRender.render(vueTemplate2, {data: {msg: 'hello'}}))
//# 输出 html
console.log(TemplateRender.render(vueTemplate2, {data: {msg: 'hello'}}).outerHTML)

```
输出内容
```
<div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>6</span>
    <span>7</span>
    <span>8</span>
    <span>9</span>
    <span>10</span>
</div>
```
```
<div>
    <span>hello --- 1</span>
    <span>hello --- 2</span>
    <span>hello --- 3</span>
    <span>hello --- 4</span>
    <span>hello --- 5</span>
    <span>hello --- 6</span>
    <span>hello --- 7</span>
    <span>hello --- 8</span>
    <span>hello --- 9</span>
    <span>hello --- 10</span>
</div>
```

### 内部实现
```
import Vue from 'vue'
import {ComponentOptions} from "vue/types/options";

export default class TemplateRender {
    static render<V extends Vue = Vue>(template: string = '', options?: ComponentOptions<V>): Element {
        const htmlVue = new Vue({
            el: document.createElement('div'),
            ...options,
            template: template
        })
        return htmlVue.$el
    }

    static renderOptions<V extends Vue = Vue>(options: ComponentOptions<V>): Element {
        const htmlVue = new Vue({
            el: document.createElement('div'),
            ...options,
        })
        return htmlVue.$el
    }
}

```
