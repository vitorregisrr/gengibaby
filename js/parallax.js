$(window).scroll(function () {
    $('.shape-parallax').each(function(key, elem) {
        var scrollSpeed = $(elem).attr('data-parallax') || 2;
        var offsetY =  parseInt( $(elem).attr('data-parallax-offsetY'))|| 0;
        var offsetY_md =  parseInt( $(elem).attr('data-parallax-offsetY-md'))|| 0;

        if(window.innerWidth < 768){
            if( offsetY_md ){
                offsetY = offsetY_md;
            }
        }

        $(elem).css({
            'top': -($(window).scrollTop()/ scrollSpeed) + offsetY + "px"
        });
    })
});

$(window).scroll();