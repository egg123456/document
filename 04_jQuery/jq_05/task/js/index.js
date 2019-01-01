(function() {
    $.fn.extend({
        slider: function(options) {
            var _that = this,
                main = null, //主函数，入口
                start = null, //开始动画
                stop = null, //停止动画
                stop_li = null,
                show = null,
                hide = null,
                init = null, //初始化
                next = null, //下一张
                pre = null, //前一张
                timeout = null, //定时器
                elems = {}, //元素集合
                defaults = {
                    speed: 600,
                    delay: 2000
                }

            options = $.extend(defaults, options);


            init = function() {
                elems._index = 1; //当前播放的图片编号
                elems.sliderDiv = _that.children('div');
                elems.btn = _that.children('span');
                elems.dot = _that.children('ul').children('li');
                elems.sliderDiv.append(elems.sliderDiv.children('img').first().clone());

                _that.hover(function() {
                    stop();
                }, function() {
                    timeout = setInterval(function() { start(1); }, options.delay + options.speed);
                });


                // elems.dot.hover(function() {
                //         var newdot = elems.dot.index($(this)) * 570;
                //         elems._index = elems.dot.index($(this));
                //         elems.sliderDiv.css('left', '-' + newdot + 'px');
                //         $(this).attr('class', 'on');
                //         $(this).siblings().removeClass('on');
                //         stop_li();
                //     },
                //     function() {
                //         start();

                //     }

                // )

                elems.btn.on('click', function() {
                    if (elems.btn.index($(this))) {
                        //左成立，右不成立
                        next();
                    } else {
                        pre();
                    }
                });
            }

            start = function(direction) {
                var left = "-=570";
                console.log(elems._index);
                //_that.children('ul').children('li: eq(elems._index)').attr('class', 'on');
                //$(this).siblings().removeClass('on');
                if (!direction) {
                    //0是true
                    left = '+=570';
                    if (elems._index <= 1) {
                        var imgleft = elems.sliderDiv.children('img').last().offset().left,
                            divleft = _that.offset().left;
                        elems._index = 4;
                        elems.sliderDiv.css('left', '-' + (imgleft - divleft) + 'px');
                    }
                }


                elems.sliderDiv.animate({

                    left: left //'-=570px'
                }, options.speed, function() {
                    //回调函数，动画执行后
                    if (direction) { elems._index++; } else { elems._index--; }

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


            pre = function() {
                stop();
                start(0);

            }


            stop = function() {
                elems.sliderDiv.stop(true, true);
                clearInterval(timeout); //停止动画定时器也停了

            }
            stop_li = function() {
                elems.sliderDiv.stop(true, false);
                clearInterval(timeout); //停止动画定时器也停了

            }




            main = function() {
                init();
                timeout = setInterval(function() { start(); }, options.delay + options.speed);

            }

            main();
        }



    });

})(jQuery);