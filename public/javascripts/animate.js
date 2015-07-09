$(function(){
    var defaultSpeed = 800;

    $('.contact').animate({ 'bottom': '0px', 'opacity': 1 }, defaultSpeed, function(){
        $('.social-icons').animate({'opacity': 1}, defaultSpeed);
        $('.title, .bottom').animate({ 'right': '0px', 'opacity': 1 }, defaultSpeed);
    });
});
