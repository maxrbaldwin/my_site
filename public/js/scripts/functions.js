var app = (function() {

    var _skills = {
        filter: function(class) {
            $('div.skills .ui.progress').each(function(i, value){
                if($(value).hasClass(class)) {
                    $(value).fadeIn();
                } else {
                    $(value).fadeOut();
                }
            });
        }
    }

    return {
        skills: _skills
    }

})();
