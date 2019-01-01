$(function(){
    for(var i = 0 ; i<$('.d1').width/30;i++){
            $('.d1').append('<div></div>')
    }
    $('.d1 div').css({
        width:'30px',
        height:'600px',
        float:'left'
    })
})