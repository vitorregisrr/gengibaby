(function () {
    'use strict';

    //Init Libs
    new WOW().init();

    // Init video
    const player = new Plyr('#about-video', {
        poster: '../images/backgrounds/bg-video.png',
        controls: ['play-large', 'play']
    });

    //!!! JS Tabs & Targets !!!//

    /*Mobile menu */

    $('[data-target="navbar"]').click(function () {
        $('#nav-list').toggleClass('show')
    })

    /* Como acontece tabs */

    $('[data-target="como-acontece"]').click(function () {
        $('.como-acontece__item').removeClass('active');
        $(this).addClass('active');
        $('.como-acontece__tab').attr('data-active', false);
        $($(this).attr('data-tab')).attr('data-active', true);

        if (window.innerWidth < 768) {
            $('html, body').animate({
                scrollTop: $('.como-acontece__tabs')
                    .offset()
                    .top - 100
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: $('.como-acontece__list')
                    .offset()
                    .top - 100
            }, 500);
        }
    })

    /* Sintomas Tab */
    $('[data-target="dentinhos"]').click(function () {
        $('.dentinhos__btn').removeClass('active');
        $('.dentinhos__main-item').attr('data-active', false);
        $('.dentinhos__navs-item').attr('data-disabled', false);

        if ($(this).attr('data-tab') === '#dentinhos-1') {
            $('#dentinhos-1').attr('data-active', true);
            $('.dentinhos__btn.left').addClass('active');
            $('.dentinhos__navs-item.left').attr('data-disabled', true);
        } else {
            $('#dentinhos-2').attr('data-active', true);
            $('.dentinhos__btn.right').addClass('active');
            $('.dentinhos__navs-item.right').attr('data-disabled', true);
        }

        $('html, body').animate({
            scrollTop: $('.dentinhos__header')
                .offset()
                .top - 80
        }, 500);
    });
    //Smooth Scrooling
    $('a[href*=\\#]:not([href$=\\#])').click(function () {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href'))
                .offset()
                .top - 80
        }, 500);
    });

    window.dispatchEvent(new Event('resize'));

})();