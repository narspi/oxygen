$('.header-top__btn').click(function(){
    $('.header-top__btn').toggleClass('active');
    $('.menu').toggleClass('active');
})

let mySwiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });

let pricingBlockSlider = document.querySelector('.pricing-slider');


let pricing;

function createSlider() {
    pricing = new Swiper('.pricing-slider', {
        slideClass: 'pricing__item',
        wrapperClass: 'pricing__items',
        loop: true,
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: '.pricing-pagination',
            bulletClass: 'pricing-pagination__bullet',
            bulletActiveClass: 'pricing-pagination__bullet-active',
            type: 'bullets',
            clickable: true,
        },
    });
};



if(window.outerWidth <= 700) {
    createSlider();
}

window.addEventListener('resize', ()=>{
    if(window.outerWidth <= 700) {
        if (!pricingBlockSlider.classList.contains('swiper-container-initialized') === true) {
            createSlider();
        }  
    }
    else {
        if (pricingBlockSlider.classList.contains('swiper-container-initialized') === true) {
            pricing.destroy();
        } 
    }
})




ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 7,
            controls: ['zoomControl'],
            behaviors: [],
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../images/map-marker.svg',
            // Размеры метки.
            iconImageSize: [57, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-26, -70]
        });

    

    myMap.geoObjects
        .add(myPlacemark);
});





$(document).ready(function(){
    $('.menu').on('click','a', function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });

    $('.header-content__decoration').on('click',function (event){
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    })

    $('.footer__btn').on('click',function (event){
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    })

    let msnr = $('.grid').masonry({
        itemSelector: '.grid-item',
        gutter: '.gutter-sizer',
        columnWidth: '.grid-sizer',
        percentPosition: true,

    })

    $('.porfolio__filter').on('click', function(event){
        event.preventDefault();
        $('.porfolio__filter').removeClass('porfolio__filter--active');
        $(this).addClass('porfolio__filter--active');
        $('.porfolio__items').removeClass('porfolio__items--active');
        $($(this).attr('href')).addClass('porfolio__items--active');
        msnr.masonry('destroy')
        msnr = $('.grid').masonry({
            itemSelector: '.grid-item',
            gutter: '.gutter-sizer',
            columnWidth: '.grid-sizer',
            percentPosition: true,
        });
        $($(this).attr('href')).css('width','0');

        $($(this).attr('href')).animate({
            width: '100%'
        })
    });


    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        },
    });
});



