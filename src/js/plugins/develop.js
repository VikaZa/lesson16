$(document).ready(function () {
    $('.mobile-button').on('click', function () {
        $('.navigation').slideToggle(400);
    });

    $(window).on('resize', function () {
        const windowWidth = $(window).outerWidth();
        if(windowWidth > 768) {
            $('.navigation').removeAttr('style');
        }
    });

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
        },
    })
});
