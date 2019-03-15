jQuery(function ($) {

    'use strict';

    (function () {
        $('.team').find('.thumbnail').find('.image-filter').mouseover(function() {
           $(this).find('.filter').fadeIn(300).mouseleave(function() {
                $(this).fadeOut(300);
           });
        });
    }());

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(750).fadeOut('slow');
    }());


    // --------------------------------------------------------------------
    // One Page Navigation
    // --------------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $('nav.navbar').addClass('sticky-nav');
                $('#site-logo').attr('src', 'img/logo.png');
            }
            else {
                $('nav.navbar').removeClass('sticky-nav');
                $('#site-logo').attr('src', 'img/logo-white.png');
            }
        });
    }());

    // --------------------------------------------------------------------
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // --------------------------------------------------------------------

    (function () {
        $('a.page-scroll').on('click', function (e) {
            e.preventDefault();
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        });
    }());

    // --------------------------------------------------------------------
    // Closes the Responsive Menu on Menu Item Click
    // --------------------------------------------------------------------

    (function () {
        $('.navbar-collapse ul li a').on('click', function () {
            if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
                $('.navbar-toggle:visible').trigger('click');
            }
        });
    }());

}); // JQuery end


 function initMap() {
    var uluru = {lat: 39.929921, lng: 32.859026};
    var map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 17,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  
  