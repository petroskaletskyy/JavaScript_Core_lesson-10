$(document).ready(function() {
	
	$('#getAge').blur(function() {
		if (($(this).val() < 0) || ($(this).val() > 100) || (isNaN($(this).val()))) {
		$('#getAge').addClass('errors');
		$('#getAge').val('Помилка');
		$('#getAge').focus();
		$('ageLabel').removeClass('invisible');
		$('ageLabel').addClass('visible');
	} else {
		$('#getAge').removeClass('errors');
		$('#getAddress').focus();
		$('ageLabel').removeClass('visible');
		$('ageLabel').addClass('invisible');
	}
	});

	$('#ajaxPost').bind('click', function() {
		$.ajax({
			type : 'POST',
			data : JSON.stringify({
				userLastName : $('#getLastName').val(),
				userFirstName : $('#getFirstName').val(),
				userAge : $('#getAge').val(),
				userAddress : $('#getAddress').val()
			}),
			contentType : 'application/json',
			url : 'http://localhost:3000/userPost',
			success : function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
			}
		});
	});

	$('#ajaxGet').bind('click', function() {
		$.ajax({
			type : 'GET',
			contentType : 'application/json',
			url : 'http://localhost:3000/userGet?userFirstName=' + $('#getFirstName').val() + 
			'&userLastName=' + $('#getLastName').val() + '&userAge=' + $('#getAge').val() +
			'&userAddress=' + $('#getAddress').val(),
			success : function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
			}
		});
	});

});