$(function() {

    $('#hamburger-icon').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mobile-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.mobile-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });

    $('.mobile-menu .top-menu a').click(function() {
        $('#hamburger-icon').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('html').removeClass('ov-hidden');
    });

    $('.style-tab').click(function() {
        $('.style-tabs').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.styles-elems').find('.styles-elem-item').hide();
        $('#' + $(this).data('switch')).show();
    });

    $('.slider-top').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.news-slider').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 1
    });


});

var flag = false;

size();

$(window).resize(function() {
    if (flag == false) {
        size();
    }
});

function size() {
    if ($(window).width() < '992') {
        $('<i></i>').prependTo('.menu .sub');

        flag = true;
    }
}

$(window).on('load resize', function() {

    var width = $(window).width();

    if (width > '991') {
        $('.mobile-menu .menu').insertAfter($('.header-bottom__left .logo'));
        $('.header-top').prependTo($('.header'));
        $('.footer-info__right .phone').appendTo($('.bottom-line__right'));
    }

    if (width < '992') {
        $('.menu .sub').click(function(e) {
            e.preventDefault();
            $(this).siblings('.sub').removeClass('active');
            $('.sub-menu').slideUp();
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).children('.sub-menu').slideUp();
            } else {
                $(this).addClass('active');
                $(this).children('.sub-menu').slideToggle();
            }



        });

        $('.bottom-line__right .phone').insertAfter($('.footer-info__right .btn-orange'));
        $('.header-top').appendTo($('.mobile-menu'));
        $('.header .menu').prependTo($('.mobile-menu'));
    }



});
//# sourceMappingURL=../sourcemaps/main.js.map
