"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.TemplateRender = void 0;
var vue_1 = require("vue");
var TemplateRender = /** @class */ (function () {
    function TemplateRender() {
    }
    TemplateRender.render = function (template, options) {
        if (template === void 0) { template = ''; }
        var htmlVue = new vue_1["default"](__assign(__assign({ el: document.createElement('div') }, options), { template: template }));
        return htmlVue.$el;
    };
    TemplateRender.renderOptions = function (options) {
        var htmlVue = new vue_1["default"](__assign({ el: document.createElement('div') }, options));
        return htmlVue.$el;
    };
    return TemplateRender;
}());
exports.TemplateRender = TemplateRender;
