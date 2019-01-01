/**
 * 文档注释两颗星
 * A Library V1.0.0
 * Author EGG
 * Date: 2017-10-27
 */
(function(window) {
    /***
     * 函数注释三颗星
     * @name  框架对象$
     * @param selector  选择器或页面加载毁掉函数
     * @param context   查找元素上下文
     */
    $ = function(selector, context) {
        if (typeof selector == 'function') {
            $(window).on('load', selector)
        } else {
            return new A.fn.init(selector, context);
        }
    }
    $.fn = $.prototype;
    $.fn.init = function(selector, context) {
        if (typeof selector === 'object') {
            this[0] = selector;
            this.length = 1
        }
    }
    $.fn.on = function(type, callback) {
        for (var i = 0; i < this.length; i++) {
            this[0].addEventListener(type, callback);
        }
    }

})(window)