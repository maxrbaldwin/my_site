$(window).scroll(myApp.events.hiddenNav);

$('.tile').click(myApp.events.tileClick);

$(document).ready(function(){
    var timeStamp = $('#templateContainer span'),
        postText = $('#templateContainer .blogText');
    myApp.format.publishDate(timeStamp);
    myApp.format.content(postText);
    console.log(postText);
});