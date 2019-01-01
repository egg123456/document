(function($) {
    $.fn.extend({
        slider: function(options) {
            var _that = this,
                main = null, // 主函数
                start = null, // 开始动画
                stop = null, // 停止动画
                init = null, // 初始化
                next = null, // 播放下一张
                prev = null, // 播放上一张
                timeout = null, // 定时器
                elems = {}, // 元素集合
                defaults = {
                    speed: 0.1,
                    delay: 1000,
                };

            var picWidth = parseInt(_that.children("div").children("img").css("width")), // 获取单张轮播图宽度
                picCount = _that.children("div").children("img").length + 1; // 获取轮播图数量还有一个图片要自己添加所以要加一

            // var timeCount = 0;

            options = $.extend(defaults, options);

            init = function() {
                elems._index = 1; // 当前播放的图片编号
                elems.sliderDiv = _that.children("div");
                elems.btn = _that.children("span");
                elems.sliderDiv.append(elems.sliderDiv.children("img").first().clone());
                _that.hover(function() {
                    stop();
                }, function() {
                    timeout = setInterval(function() { start(); }, options.speed);
                });
                elems.btn.on("click", function() {
                    if (elems.btn.index($(this))) next();
                    else prev();
                });
            };
            start = function() {
                var left = "-=1";
                elems.sliderDiv.animate({
                    // left: parseInt(elems.sliderDiv.css("left")) === -elems._index * picWidth ? -elems._index * picWidth : left
                    left: left
                }, options.speed, function() {
                    // 尝试后未能实现的功能：当前展示图片全部进入展示区域时停顿一段时间
                    // parseInt(elems.sliderDiv.css("left")) === -elems._index * picWidth && (timeCount++);
                    // timeCount === 1000 && elems.sliderDiv.css("left", -elems._index * picWidth - 1)

                    // parseInt(elems.sliderDiv.css("left")) === -elems._index * picWidth && stop().delay(1000) && $(this).start();


                    // 当sliderDiv的left属性小于当前的图片序号乘以图片宽度时序号加1 // 注意left属性为负值所以是小于时
                    parseInt(elems.sliderDiv.css("left")) < -elems._index * picWidth && elems._index++;
                    // 当当前展示图片序号等于图片总数时将sliderDiv的left值设为0并将当前展示图片序号设为1
                    elems._index === picCount && elems.sliderDiv.css("left", "0") && (elems._index = 1);
                });
            }
            next = function() {
                stop();
                elems.sliderDiv.animate({
                    // 按下向右按钮时left值设为当前展示图片左边距sliderDiv的右边的距离（负值），并且当前展示图片序号加1 
                    left: -(elems._index++) * picWidth
                }, function() {
                    // 当前展示图片序号为最后一个序号时left值设为0，并且序号设为1
                    elems._index === picCount && (elems._index = 1) && elems.sliderDiv.css("left", 0);
                });
                // start();
            };
            prev = function() {
                stop();
                elems.sliderDiv.animate({
                    // 按下向左按钮时left值设为当前展示图片左边距sliderDiv的左边的距离（负值），并且当前展示图片序号减1 
                    left: -(--elems._index) * picWidth
                }, function() {
                    // 当前展示图片序号为0时left值设为最后一张图片的左边至sliderDiv的左边的距离，并且序号设为最后一个序号减1（试试不减1会怎么样）
                    elems._index === 0 && (elems._index = picCount - 1) && elems.sliderDiv.css("left", -elems._index * picWidth);
                });
                // start();
            };

            stop = function() {
                elems.sliderDiv.stop(true, true);
                clearInterval(timeout);
            };

            main = function() {
                init();
                timeout = setInterval(function() { start() }, function() {


                    // timeCount === 1000 && (timeCount = 0);
                });
            }
            main();



        },
    })
})(jQuery)






















/*
(function($) {
    $.fn.extend({
        slider: function(options) {
            var _that = this,
                main = null, // 主函数
                start = null, // 开始动画
                stop = null, // 停止动画
                init = null, // 初始化
                next = null, // 播放下一张
                prev = null, // 播放上一张
                timeout = null, // 定时器
                elems = {}, // 元素集合
                defaults = {
                    speed: 600,
                    delay: 3000
                };
            options = $.extend(defaults, options);

            init = function() {
                elems._index = 1; // 当前播放的图片编号
                elems.sliderDiv = _that.children("div");
                elems.btn = _that.children("span");
                elems.sliderDiv.append(elems.sliderDiv.children("img").first().clone());
                _that.hover(function() {
                    stop();
                }, function() {
                    timeout = setInterval(function() { start(1); }, options.delay + options.speed);
                });
                elems.btn.on("click", function() {
                    if (elems.btn.index($(this))) next();
                    else prev();
                });
            };
            start = function(direction) {
                var left = "-=570";
                if (!direction) {
                    left = "+=570";
                    // elems._index--;
                    if (elems._index <= 1) {
                        var imgleft = elems.sliderDiv.children("img").last().offset().left,
                            divleft = _that.offset().left;
                        elems._index = 4;
                        elems.sliderDiv.css("left", "-" + (imgleft - divleft) + "px");
                    }
                }
                elems.sliderDiv.animate({
                    left: left
                }, options.speed, function() {
                    direction === 1 ? elems._index++ : elems._index--;
                    if (elems._index === 4) {
                        elems.sliderDiv.css("left", "0");
                        elems._index = 1;
                    }
                }).delay(options.delay);
            };
            next = function() {
                stop();
                start(1);
            };
            prev = function() {
                stop();
                start(0);
            };

            stop = function() {
                elems.sliderDiv.stop(true, true);
                clearInterval(timeout);
            };

            main = function() {
                init();
                timeout = setInterval(function() { start(1) }, options.delay);
            }
            main();



        },
    })
})(jQuery)
*/