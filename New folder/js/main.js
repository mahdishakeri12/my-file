$(document).ready(function(){
    $('.Show').click(function(){
        $('.square').toggle();
    })
    $('.slide').click(function(){
        $('.square').slideToggle();
    })
    $('.fade').click(function(){
        $('.square').fadeToggle();
    })
    $('.hover').hover(function(){
        $('.square').css('background-color','red');
    })
    $('.test').focus(function(){
        $(this).css('background-color','yellow');
    })
    $('.test').blur(function(){
        $(this).css('background-color','green');
    })
    $('.p1').mouseenter(function(){
        alert("you enterd this paragraph")
    })
    $('.p2').mouseleave(function(){
        alert("you leaved this paragraph")
    })
})