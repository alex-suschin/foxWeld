$(function() {

    $(window).on('load', function() {
        let phones = [
            { 'mask': '+7 \\ \\ ###-###-##-##' }
        ];

        $('input[type=tel]').inputmask({
            mask: phones,
            greedy: false,
            definitions: {
                '#': {
                    validator: '[0-9]',
                    cardinality: 1
                }
            }
        });
    });

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

    ymaps.ready(function() {
        var myMap = new ymaps.Map('map', {
                center: [51.675628, 39.201276],
                zoom: 17,
                scrollZoom: false,
                controls: ['zoomControl']
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark([51.675578, 39.203287], {
                hintContent: 'Россия, Воронеж ул. Кольцовская 9а, оф. 626',
                balloonContent: 'Россия, Воронеж ул. Кольцовская 9а, оф. 626'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../img/map-marker.svg',
                iconImageSize: [48, 61],
                cursor: 'pointer',
                iconImageOffset: [-30, -120],
                balloonclose: true
            });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects
            .add(myPlacemark)

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
    $('.menu .sub').addClass('js-sub');
}

$('.menu .js-sub').click(function(e) {
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

$('.categories-item-title').click(function() {
    $(this).toggleClass('active');
    $(this).siblings('ul').slideToggle();
});

$('.categories-item li').click(function(e) {
    e.preventDefault();
    $('.categories-item li').removeClass('active');
    $(this).addClass('active');
});

$('.info-tovar--photos').sliderPro({
    width: 490,
    height: 488,
    orientation: 'vertical',
    loop: false,
    arrows: true,
    buttons: false,
    thumbnailsPosition: 'left',
    thumbnailPointer: true,
    thumbnailWidth: 154,
    thumbnailHeight: 154,
    breakpoints: {
        1200: {
            orientation: 'horizontal',
            thumbnailsPosition: 'bottom',
            thumbnailWidth: 120
        },
        575: {
            orientation: 'horizontal',
            thumbnailsPosition: 'bottom',
            thumbnailWidth: 66,
            thumbnailHeight: 60,
        }
    }
});


$(window).on('load resize', function() {

    var width = $(window).width();

    if (width > '991') {
        $('.mobile-menu .menu').insertAfter($('.header-bottom__left .logo'));
        $('.header-top').prependTo($('.header'));
        $('.footer-info__right .phone').appendTo($('.bottom-line__right'));
    }

    if (width < '992') {


        $('.bottom-line__right .phone').insertAfter($('.footer-info__right .btn-orange'));
        $('.header-top').appendTo($('.mobile-menu'));
        $('.header .menu').prependTo($('.mobile-menu'));
    }

    if ($(window).width() > '741') {
        $('.news-slider:not(.slick-initialized)').slick({
            infinite: true,
            dots: false,
            slidesToShow: 3,
            swipeToSlide: true,
            slidesToScroll: 1
        });
    } else {
        $(".news-slider.slick-initialized").slick("unslick");
    }

    if ($(window).width() < '741') {
        $('.products-items:not(.slick-initialized)').slick({
            infinite: true,
            arrows: false,
            dots: false,
            variableWidth: true,
            slidesToShow: 1,
            swipeToSlide: true,
            slidesToScroll: 1
        });
    } else {
        $(".products-items.slick-initialized").slick("unslick");

    }


});
//# sourceMappingURL=../sourcemaps/main.js.map
