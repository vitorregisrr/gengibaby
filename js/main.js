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

    $('[data-target="navbar"]').click( function(){
        $('#nav-list').toggleClass('show')
    })

    /* Como acontece tabs */

    $('[data-target="como-acontece"]').click( function(){
        $('.como-acontece__item').removeClass('active');
        $(this).addClass('active');
        $('.como-acontece__tab').attr('data-active', false);
        $($(this).attr('data-tab')).attr('data-active', true);
    })
    
    window.dispatchEvent(new Event('resize'));

})();