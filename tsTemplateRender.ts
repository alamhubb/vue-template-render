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
