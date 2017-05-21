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

});



