var html = {
    tabs: '.ui.tabs',
    menus: '.tabular.menu .item'
}

$(function() {
    console.log(app);
    app.score.load(html.tabs);
});
//Semantic Code
$(html.menus).tab();
