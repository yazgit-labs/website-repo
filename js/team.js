jQuery(function ($) {

    'use strict';

    (function () {
        $('.team').find('.thumbnail').find('.image-filter').mouseover(function() {
           $(this).find('.filter').fadeIn(300).mouseleave(function() {
                $(this).fadeOut(300);
           });
        });
    }());

    
}