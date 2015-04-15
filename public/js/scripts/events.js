var html = {
    tabs: '.ui.tabs',
    menus: '.tabular.menu .item'
}

$('div.filters .button, div.scale .measure').click(function(){
    var class = $(this).data('filter');

    app.skills.filter(class);
});

//Semantic Code
$(html.menus).tab();
