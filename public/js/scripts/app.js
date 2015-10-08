var app = (function($){
  var nav = {
    toggle: function() {
      var nav = $('.nav-mobile');

      if(nav.hasClass('showing')) {
        nav.hide().removeClass('showing');
        return;
      }

      nav.show().addClass('showing');
    }
  };

  var analytics = {
    postViews: function() {
      ga('send', 'event', 'post', 'post-view', 'test');
    },
    categoryView: function() {

    },
    keystoneClick: function() {

    }
  };

  return {
    nav: nav,
    ga: analytics
  };
})($);
