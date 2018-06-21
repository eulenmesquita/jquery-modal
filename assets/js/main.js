function blockUI( message ) {
	// Default message
	message = message || 'Please wait...';

	// Unblock UI if already blocked
	$.unblockUI();

	//Block UI
	$.blockUI( 
        {
		message: '<img src="/assets/images/processing.gif" /> ' + message,
		css:
		{
			'background-color': 'white',
			border: '1px solid #DDDDDD',
			color: '#999999',
			'font-size': '14px',
			height: '60px',
			left: '50%',
			padding: '14px 0px 2px',
			'margin-left' : '-125px',
			'text-align': 'center',
			top: '50%',
			width: '250px'
		}
	});
}

function unblockUI() {
	$.unblockUI();
}

function showAlert(message) {
    var deferred = $.Deferred();
    $('#alertModal .alertMessage').html(message);
    $('#alertModal').modal();
    $('#alertModal .ok').on('click', function () {
        deferred.resolve();
        $(this).unbind('click');
    });

    return deferred.promise();
}

function showConfirm(message) {
    var deferred = $.Deferred();
    $('#confirmModal .confirmMessage').html(message);
    $('#confirmModal').modal();
    $('#confirmModal .ok').on('click', function () {
        $('#confirmModal').modal('hide');
        deferred.resolve();
        $(this).unbind('click');
    });
    $('#confirmModal .cancel').on('click', function () {
        deferred.reject();
        $(this).unbind('click');
    });

    return deferred.promise();
}