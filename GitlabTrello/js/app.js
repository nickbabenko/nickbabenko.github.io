TrelloPowerUp.initialize({
    'show-settings': function(t, options) {
        return t.popup({
            title: 'GitLab Settings',
            url: 'settings.html',
            height: 250
        });
    }
});