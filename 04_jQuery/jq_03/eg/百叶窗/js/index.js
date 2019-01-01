$(document).ready(function() {
    var imgs = ['images/1.png', 'images/2.png', 'images/3.png'];
    $('.img img').on('click', function() {
        $('.img img').empty();
        var i = $('.img img').index($(this));
        $('.box').css('background', 'url(' + imgs[i] + ')');
        for (var i = 0; i < $('.box').height() / 10; i++) {
            var tempDiv = $('<div></div>');
            tempDiv.css({
                'position': 'absolute',
                'top': i * 10,
                'height': '10px',
                'background': '#fff',
                'width': '100%'
            });
            $('.box').append(tempDiv);
        }
        $('.box div').each(function(index, elem) {
            $(elem).delay(index * 5).fadeOut(350);
        })
    })
})