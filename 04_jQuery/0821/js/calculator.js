$(function() {
    //命名空间
    var calc = {};

    //初始化函数
    calc.init = function() {
        //计算结果数据
        calc.val = "";
        //算式数据
        calc.equation = "";
        //清空算式(视图)
        $(".equation").html("");
        //清空计算结果(视图)
        $(".val").html("");
    }
    calc.start = function() {
        //绑定除功能键以外的按键事件
        $(".btns li:not('.disable,.back,.clear,.calculate,.sqrt')").on('click', function() {
            // 保存当前上下文环境(指针)
            var _that = this;

            //当有计算结果时，将结果移至下一次计算的算式
            if (calc.val && $(this).hasClass('sym')) {
                $('.equation').html(calc.val);
                //清空结果
                delete calc.val;
            }

            //按钮内容写入算式视图
            $(".equation").html(function(index, oldval) {
                return oldval + $(_that).html();
            });

            //设置算式数据
            calc.equation = $('.equation').html();
        });

        $('.calculate').on('click', calc.calc);

        $('.clear').on('click', calc.init);

        $('.back').on('click', calc.back);

        $('.sqrt').on('click', calc.sqrt);
    }

    calc.calc = function() {
        //运算函数
        $(".val").html(function() {
            var num = eval(calc.equation);
            var result = 0; //结果
            if (parseInt(num) === num) { //判断是整数还是小数
                result = eval(calc.equation);
            } else {
                //限制浮点数长度
                result = parseFloat(eval(calc.equation).toPrecision(16));
            }
            return result; //返回结果
        });
        calc.val = $('.val').html(); //将视图结果赋值给结果数据
    }

    calc.back = function() {
        //退格操作，字符串截取，从下标0到倒数第二位
        $('.equation').html(function(index, oldval) {
            return oldval.slice(0, -1);
        });

        //更新数据
        calc.equation = $('.equation').html();
    }

    calc.sqrt = function() {
        $('.equation').html(function(index, oldval) {
            return Math.sqrt(parseFloat(oldval));
        });
        calc.equation = $('.equation').html();
    }

    calc.main = function() {
        calc.init();
        calc.start();
    }

    calc.main();

    $(document).on('keyup', function(event) {
        var code = event.keyCode;
        var tempStr = "";
        if (event.shiftKey) {
            switch (code) {
                case 56:
                    tempStr = "*";
                    break;
                case 187:
                    tempStr = "+";
                    break;
            }
        } else if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105)) {
            if (code >= 96) code -= 48;
            tempStr = String.fromCharCode(code);
        } else if (code == 8 || code == 107 || code == 110 || code == 13 || code == 187 || (code >= 189 && code <= 191)) {
            switch (code) {
                case 8:
                    calc.back();
                    break;
                case 13:
                case 187:
                    calc.calc();
                    break;
                case 106:
                    tempStr = "*";
                    break;
                case 107:
                    tempStr = "+";
                    break;
                case 189:
                    tempStr = "-";
                    break;
                case 110:
                case 190:
                    tempStr = ".";
                    break;
                case 111:
                case 191:
                    tempStr = "/";
                    break;
            }
        }
        $(".equation").html(function(index, oldval) {
            return oldval + tempStr;
        });
        calc.equation = $('.equation').html();
    });
});