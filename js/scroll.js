$(document).ready(function() {
	$('.scroll-target').on('click', function() {
		$('#overlay').animate({
			opacity: 0,
		}, 1, function() {
			// Animation complete.
		});
		$('#overlay').animate({
			opacity: 1,
		}, 400, function() {
			// Animation complete.
		});
	}); 

});