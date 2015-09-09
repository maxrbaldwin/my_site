var app = (function($){
  var posts = {
    switchView: function(path) {
      this.getOne(path)
        .then(function(post){
          console.log(post);
        })
        .error(function(err){
          console.log(err);
        });
    },
    getOne: function(path) {
      return $.ajax(path);
    }
  };

  return {
    posts: posts
  };
})($);
