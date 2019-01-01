(function($) {
    $.fn.extend({
        slider: function(options) {
            var _that = this,
                main = null,
                start = null,
                stop = null,
                init = null,
                next = null,
                prev = null,
                timeout = null,
                elems = {},
                defaults = {
                    speed: 600,
                    delay: 3000
                }
            options = $.extend(defaults, options);

            init = function() {
                elems._index = 1;
                elems.sliderDiv = _that.children('div');
                elems.btn = _that.children('span')
                elems.sliderDiv.append(elems.sliderDiv.children('img').first().clone());

                // _that.hover(function() {
                //     stop();
                // }, function() {
                //     timeout =
                // })
            }
            next = function() {
                stop();
                start();
            }
            start = function() {
                elems.sliderDiv.animate({
                    left: '-=570'
                }, options.speed, function() {
                    elems._index++;
                    if (elems._index == 4) {
                        elems.sliderDiv.css('left', 0);
                        elems._index = 1;
                    }
                }).delay(options.delay);
            }
            stop = function() {
                elems.sliderDiv.stop
            }
            main = function() {
                init();
                timeout = setinterval(function() {
                    start();
                }, 3600)
            }
        }
    })
})(jQuery)