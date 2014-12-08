$(window).scroll(myApp.events.hiddenNav);

$('.tile').click(myApp.events.tileClick);

$(document).ready(function(){
    var timeStamp = $('#templateContainer .date'),
        postText = $('#templateContainer .blogText').next();
    myApp.format.publishDate(timeStamp);
    myApp.format.content(postText);
    myApp.init();
});

// $(document).on('scroll', function(self) {
//     console.log('scroll');
//     myApp.scrolling.scroll(self);
// });