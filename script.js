/**
 * Created by Agnieszka on 2016-11-08.
 */
$(document).ready(function() {
    $('.toggle-nav').on("click", (function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navbar ul').toggleClass('active');
    }));
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        $('.navbar').addClass('menu-effect');
    }
    else {
        $('.navbar').removeClass('menu-effect');
    }
});

// http://inspirationalpixels.com/tutorials/creating-a-responsive-menu-with-html-css-jquery