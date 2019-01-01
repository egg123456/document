$(function() {
    //命名空间
    var calc = {};


    //初始化函数
    calc.init = function() {
        //计算结果  数据
        calc.val = '';
        //算式数据
        calc.equation = '';
        //清空算式（视图）
        $(".equation").html('');
        //清空计算结果（视图）
        $(".val").html('');

    }



    calc.start = function() {
        //绑定除了功能键以外的按键
        $('.btns dd:not(".no,.back,.denyu,.clear,.sqr,.jdz,.fshu")').on('click', function() {
            var _that = this;

            //当有计算结果时，将结果移至下一次计算的算式
            if (calc.val && $(this).hasClass('sym')) {
                $('.equation').html(calc.val);
                //清空结果
                delete calc.val;

            }

            //按钮内容写入算式视图
            $('.equation').html(function(index, oldval) {
                return oldval + $(_that).html();
            });
            //设置算式的数据
            calc.equation = $('.equation').html();

        });

        $('.denyu').on('click', calc.calc);
        $('.clear').on('click', calc.init);
        $('.back').on('click', calc.back);
        $('.sqr').on('click', calc.sqr);
        $('.jdz').on('click', calc.jdz);
        $('.fshu').on('click', calc.fshu);
    }

    calc.calc = function() {
        //运算函数
        $('.val').html(function() {
            var num = eval(calc.equation);
            var result = 0;
            if (parseInt(num) === num) { //判断整数还是小数
                result = eval(calc.equation);

            } else {
                //限制浮点数个数
                result = parseFloat(eval(calc.equation).toPrecision(18));
            }
            return result; //返回结果

        });
        calc.val = $('.val').html(); //将视图结果赋值给结果
    }

    calc.back = function() {
        //退格操作，字符串截取，从下标到倒数第二位
        $('.equation').html(function(index, oldVal) {
            return oldVal.slice(0, -1);

        });
        calc.equation = $('.equation').html();
    }


    calc.sqr = function() {
        $('.equation').html(function(index, oldVal) {
            return Math.sqrt(parseFloat(oldVal));
        });

        calc.equation = $('.equation').html();

    }
    calc.jdz = function() {
        $('.val').html(function(index, oldVal) {
            return Math.abs(parseFloat(oldVal));
        });
        calc.equation = $('.equation').html();
    }

    calc.fshu = function() {
        $('.equation').html(function(index, oldVal) {
            return (1 / oldVal);
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
        var tempstr = '';
        console.log(code);
        if (event.shiftKey) {
            switch (code) {
                case 56:
                    tempstr = '*';
                    break;
                case 187:
                    tempstr = '+';
                    break;

            }

        } else if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105)) {
            if (code > 96) code -= 48;
            tempstr = String.fromCharCode(code);

        } else if (code === 8 || code === 107 || code === 13 || code === 106 || code === 109 || code === 110 || code === 111 || code === 190 || (code >= 187 && code <= 216)) {
            switch (code) {
                case 8:
                    calc.back();
                    break;
                case 13:
                    calc.calc();
                    break;
                case 106:
                    tempstr = '*';
                    break;
                case 110:
                    tempstr = '.';
                    break;
                case 190:
                    tempstr = '.';
                    break;
                case 109:
                    tempstr = '-';
                    break;
                case 107:
                    tempstr = '+';
                    break;
                case 111:
                    tempstr = '/';
                    break;
            }
        }

        $('.equation').html(function(index, oldval) {
            return oldval + tempstr;
        });

        calc.equation = $('.equation').html();
    });


});