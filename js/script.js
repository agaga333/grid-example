$(function() {

    var $navbar = $('.navbar'),
        addEffectHeight = 200,
        $linkNav = $('.link-nav'),
        $goTop = $('.go-top'),
        $scrollTop = $('#scroll-top');

    $('.toggle-nav').on("click", (function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navbar ul').toggleClass('active');
    }));

    $(window).scroll(function () {
        if ($(window).scrollTop() > addEffectHeight) {
            $navbar.addClass('menu-effect');
            $goTop.addClass("show");
        }
        else {
            $navbar.removeClass('menu-effect');
            $goTop.removeClass("show");
        }
    });

    $scrollTop.click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    $linkNav.on('click', function(event) {
        var target = $( $(this).attr('href') );
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });



});

// http://inspirationalpixels.com/tutorials/creating-a-responsive-menu-with-html-css-jquery