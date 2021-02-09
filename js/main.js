$(document).ready(function () {
    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__menu').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
    $('ul.header__menu li span').click(function () {
        $('ul.header__menu').toggleClass('open-menu');
        $('.menu-burger__header').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 6,
        centeredSlides: true,
        spaceBetween: 30,
        freeMode: true,
        breakpoints: {

            320: {
                slidesPerView: 2,
                spaceBetween: 10
            },

            600: {
                slidesPerView: 2
            },

            730: {
                slidesPerView: 3
            },

            900: {
                slidesPerView: 4
            },

            1200: {
                slidesPerView: 5
            }
        }
    });

    var swiper = new Swiper('.swiper-container-2', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {

            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
    });
    
            jQuery(".link2").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".about").offset().top
        }, 400);
    });

        jQuery(".link3").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".service").offset().top
        }, 400);
    });
    
            jQuery(".link4").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".extra").offset().top
        }, 400);
    });
    
            jQuery(".link5").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".touch").offset().top
        }, 400);
    });


});
