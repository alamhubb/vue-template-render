// import TemplateRender from './index'
const TemplateRender = require('./index')


console.log(TemplateRender)
//no options
const vueTemplate1 = `
    <div><span v-for="i in 10">{{ i }}</span></div>
    `

console.log(TemplateRender.render(vueTemplate1))


//options
const vueTemplate2 = `
    <div><span v-for="i in 10">{{msg}} --- {{ i }}</span></div>
    `

console.log(TemplateRender.render(vueTemplate2, {data: {msg: 'hello'}}))
