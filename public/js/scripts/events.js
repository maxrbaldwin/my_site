$('.post').click(function(){
  var path = $(this).attr('data-post');

  app.posts.switchView(path);
});
