var alert = function() {
    var favourite = $('.form-check-input:checked').next('.form-check-label').text().trim();
    
    showAlert('You\'ve chosen <span class="text-warning strong">' + favourite + '</span>');
}

var confirm = function() {
    showConfirm('Do you wish to destroy the world?')
        .then(function() {
            showAlert('Ops! This event has failed.');
        })
        .catch(function() {
            showAlert('Destruction aborted');
        });
}

$('.alert').on('click',  alert);

$('.confirm').on('click', confirm);