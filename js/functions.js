jQuery(function() {
    var windowHeight = $(window).height(),
        slideWidth = $('#topSkip').outerWidth(),
        slideHideRight = slideWidth * -1;

        console.log(slideHideRight);

    $('#topSkip').css('right', slideHideRight + 'px');

    $(window).scroll(function() {
        var y = $(window).scrollTop();
        if (y > windowHeight) {
            $('#nav').slideDown(1000);
            $('#topSkip').animate({
                'right': '0px'
            }, 1000)

        }
        if (y < windowHeight) {
            $('#nav').slideUp(1000);
            $('#topSkip').animate({
                'right': slideHideRight
            }, 1000)
        }
    });
});
