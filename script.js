/**
 * Created by Agnieszka on 2016-11-08.
 */
jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.navbar ul').toggleClass('active');

        e.preventDefault();
    });
});

// http://inspirationalpixels.com/tutorials/creating-a-responsive-menu-with-html-css-jquery