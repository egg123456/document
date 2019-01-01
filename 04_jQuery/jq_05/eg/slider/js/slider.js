(function($) {
    $.fn.extend({
        slider: function(options) {
            var _that = this,
                main = null, //主函数，入口
                start = null, //开始动画
                stop = null, //停止动画
                init = null, //初始化 
                next = null, //播放下一张
                prev = null, //播放上一张
                skip = null,
                timeout = null, //定时器
                elems = {}, //元素集合
                defaults = {
                    speed: 60,
                    delay: 10
                }
            defaults.width = _that.children('div').children('img').first().outerWidth();
            defaults.height = _that.children('div').children('img').first().outerHeight();

            options = $.extend(defaults, options);

            init = function() {
                elems._index = 1; //当前播放的图片编号
                elems.sliderDiv = _that.children('div');
                elems.btn = _that.children('span');
                elems.circle = _that.children('ul').children('li');
                // var img = elems.sliderDiv.children('img').first();
                elems.sliderDiv.append(elems.sliderDiv.children('img').first().clone());

                _that.hover(function() {
                    stop();
                }, function() {
                    timeout = setInterval(function() { start(1); }, options.delay + options.speed);
                });

                elems.btn.on('click', function() {
                    if (elems.btn.index($(this))) {
                        next();
                    } else {
                        prev();
                    }
                });
                elems.circle.hover(function(e) {
                    stop();
                    skip();
                    e.stopPropagation();
                }, function() {

                });
            }

            start = function(direction) {
                var left = "-=" + options.width;
                if (!direction) {
                    left = "+=" + options.width;
                    if (elems._index <= 1) {
                        var imglift = elems.sliderDiv.children('img').last().offset().left,
                            divleft = _that.offset().left;
                        elems._index = 4;
                        elems.sliderDiv.css('left', '-' + (imglift - divleft) + 'px');
                    }
                }
                elems.sliderDiv.animate({
                    left: left
                }, options.speed, function() {
                    if (direction) elems._index++;
                    else elems._index--;
                    if (elems._index == 4) {
                        elems.sliderDiv.css('left', 0);
                        elems._index = 1;
                    }
                }).delay(options.delay);
            }

            next = function() {
                stop();
                start(1);
            }

            prev = function() {
                stop();
                start(0);
            }

            stop = function() {
                elems.sliderDiv.stop(true, true);
                clearInterval(timeout);
            }

            skip = function() {
                var cur = $('ul li').index($(this)),
                    stance = 0;
                console.log(cur);
                if (elems._index - 1 > cur) {
                    stance = -(elems._index - 1 - cur) * defaults.width;
                } else {
                    stance = (elems._index - 1 - cur) * defaults.width;
                }
                elems.sliderDiv.animate({
                    left: stance
                }, 1000);

            }

            main = function() {
                init();
                timeout = setInterval(function() { start(1); }, options.delay + options.speed);
            }

            main();

        }
    });
})(jQuery)