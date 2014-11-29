var myApp = (function() {
    var init = function() {
            myApp.scrolling.focus();
        },
        scrolling = {
            focus: function() {
                var active = $('.focused');
                $('body', 'html').animate({
                    scrollTop: active.offset().top
                }, 500);
            },
            scroll: function(self) {
                // var focusedNow = $('.focused'),
                //     next = $('.focused').next();

                // next.addClass('focused');
                // focusedNow.removeClass('focused');

                // $('body, html').animate({
                //     scrollTop: next.offset()
                // }, 500);
            }
        },
        events = {
            globals: {
                windowHeight: $(window).height(),
                windowWidth: $(window).width()
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
            },
            filterClick: function() {

            }
        },
        formatting = {
            publishDate: function(time) {
                var timeSelector = time.text(),
                    timeStamp = timeSelector.split(' '),
                    month = timeStamp[1],
                    date = timeStamp[2],
                    year = timeStamp[3],
                    newDate = month + ' ' + date + ', ' + year;

                time.text(newDate);
            },
            content: function(content) {
                var text = content.text(),
                    moreContent = text + '...';
                content.text(moreContent);
            }
        }
    return {
        init: init,
        events: events,
        format: formatting,
        scrolling: scrolling
    }
})();
