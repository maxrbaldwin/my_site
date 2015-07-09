$(function(){
    var defaultSpeed = 800;

    $('.contact').animate({ 'bottom': '0px', 'opacity': 1 }, defaultSpeed, function(){
        $('.social-icons').animate({'opacity': 1}, defaultSpeed);
        $('.title, .bottom').animate({ 'right': '0px', 'opacity': 1 }, defaultSpeed);
    });
});

$('.icon').mouseover(function(){
    var defaultSpeed = 100;
    $(this).animate({'bottom': '20px'}, defaultSpeed, function(){
        $(this).animate({'bottom': '0px'}, defaultSpeed);
    });
});
