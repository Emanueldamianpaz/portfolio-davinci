$(document).ready(function () {

    // ---------------------------------------- Watching para cambiar section active
    $(document).on("scroll", onScroll);

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

    // ---------------------------------------- Imagen se mueve
    $(".img-move").mousemove(function (e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('.img-move').css("background-position", newvalueX + "px     " + newvalueY + "px");
    });

    // ---------------------------------------- Implementacion del change item navbar
    function onScroll() {
        var scrollPos = $(document).scrollTop();
        $('#menu-navbar ul a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if ((refElement.position().top) - 10 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#menu-navbar ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });

        /*
         TODO
         Hacer script para que aparezca boton y suba

         if (scrollPos < 100) {
         $('#btn-to-top').style.display = "block";
         } else {
         $('#btn-to-top').style.display = "none";
         }*/
    }


});
