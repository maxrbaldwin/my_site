var events = {

    globals:  {
        windowHeight : $(window).height(),
        windowWidth : $(window).width()
    },
    hiddenNav: function() {
        var y = $(window).scrollTop();
        if (y > events.globals.windowHeight) {
            $('#nav').slideDown(300);

        }
        if (y < events.globals.windowHeight) {
            $('#nav').slideUp(300);
        }
    },
    tileClick: function() {
        console.log('clicked');
    }
}

$(window).scroll(events.hiddenNav);

$('.tile').click(events.tileClick);
