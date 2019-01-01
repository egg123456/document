(function($) {
    $.fn.extend({
        slider: function(options) {
            var _that = this,
                start = null,
                stop = null,
                init = null,
                elems = {},
                next = null,
                pre = null,
                main = null,
                timeout = null,
                defaults = {
                    speed: 600,
                    delay: 2000
                }
            options = $.extend(defaults, options);
            init = function() {
                elems._index = 0;
                elems.sliderDiv = _that.children('div');
                elems.btn = _that.children('span');
                elems.dot = _that.children('ul').children('li');
                elems.sliderDiv.append(elems.sliderDiv.children('img').first().cloe());

                options.width = elems.sliderDiv.childern('img').first().outerWidth();

                elems.sliderDiv.hover(function() {
                    stop();
                }, function() {
                    timeout = setInterval(function() {
                        start(1);
                    }, options.speed + options.delay)
                })

                elems.btn.on('click', function() {
                    if (elems.btn.index(this)) {
                        next();
                    } else {
                        pre();
                    }
                })

                elems.dot.hover(function() {
                    var stance = elems.dot.index(this);
                    $(this).css({
                        left: -stance
                    })
                })
            }
        }
    })
})(jQuery)