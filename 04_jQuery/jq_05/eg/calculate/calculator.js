$(function() {
    var calc = {};
    calc.init = function() {
        calc.val = $('.screen').html('');
        calc.equation = $('screen');
        calc.fn = $('button.fn');
        calc.ge = $('button').not(calc.fn);
        calc.eq = $('button.eq');

        calc.ge.on('click', function() {
            var newValue = $(this).html;
            calc.equation.html(function(index, oldvalue) {
                return oldvalue + newValue;
            })
        })

        calc.eq.on('click', function() {
            calc.val = eval(calc.equation.html);
            calc, equation.html(function(index, oldvalue) {
                return oldvalue + "<br>" + calc.val;
            })
        })
    }
    init();
})