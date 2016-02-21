var t = TrelloPowerUp.iframe(),
    Promise = TrelloPowerUp.Promise;

var repositoryUrlField = document.getElementById('repository_url');

var KEY_REPOSITORY_URL = 'repositoryUrl';

t.render(function() {
    return Promise.all([
        t.get('board', 'private', KEY_REPOSITORY_URL)
    ])
    .spread(function(repositoryUrl) {
        repositoryUrlField.value = repositoryUrl;
    })
    .then(function() {
        t.sizeTo('#content').done();
    })
});

document.getElementById('save').addEventListener('click', function() {
    return t.set('board', 'private', KEY_REPOSITORY_URL, repositoryUrlField.value)
        .then(function() {
            t.closePopup();
        });
});