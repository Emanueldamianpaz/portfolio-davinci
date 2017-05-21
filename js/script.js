$(document).ready(function () {

    // ---------------------------------------- Menu scrolleable
    var altura = $('.topnav').offset().top;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('.container').addClass('menu-fixed');
        } else {
            $('.container').removeClass('menu-fixed');
        }
    });

    // ---------------------------------------- Cambiar de color

    $('#items a').click(function () {
        $('#items a').removeClass('active');
        $(this).addClass('active');
    });

    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();

    $("#home-img").mousemove(function (e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('#home-img').css("background-position", newvalueX + "px     " + newvalueY + "px");
    });
});



