(function ($) {
    "use strict";

    $(document).ready(function () {

        // Spinner
        setTimeout(function () {
            if ($('#spinner').length) {
                $('#spinner').removeClass('show');
            }
        }, 1);

        // WOW
        if (typeof WOW === "function") {
            new WOW().init();
        }

        // Sticky Navbar (FIXED)
        

        // Back to top
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });

        $('.back-to-top').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
            return false;
        });

        // Header carousel (safe init)
        if ($(".header-carousel").length) {
            $(".header-carousel").owlCarousel({
                autoplay: false,
                smartSpeed: 1500,
                items: 1,
                dots: true,
                loop: true,
                nav: false,
            });
        }

        // Testimonial carousel
        if ($(".testimonial-carousel").length) {
            $(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: true,
                margin: 24,
                dots: true,
                loop: true,
                nav: false,
                responsive: {
                    0: { items: 1 },
                    768: { items: 2 },
                    992: { items: 3 }
                }
            });
        }

    });

})(jQuery);

$("#header").load("components/header.html", function () {
        $(window).trigger('scroll'); // 🔥 important
    });

    $("#footer").load("components/footer.html");

    
