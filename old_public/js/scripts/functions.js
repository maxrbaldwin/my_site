var app = (function() {

    var semantic_events = {

    };

    var contact_form = {
        set_form: function() {

        },
        get_number: function() {
            var random_number = Math.floor((Math.random() * 100) + 1);

            return random_number;
        },
        set_numbers: function() {

        }
    };

    return {
        _form: contact_form,
        _s_events: semantic_events
    };

})();
