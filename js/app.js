TrelloPowerUp.initialize({
    'attachment-sections': function(t, options) {

    },
    'card-detail-badges': function(t, options) {

    },
    'card-buttons': function(t, options) {

    },
    'show-settings': function(t, options) {
        return t.popup({
            title: 'GitLab Settings',
            url: 'settings.html',
            height: 250
        });
    }
});