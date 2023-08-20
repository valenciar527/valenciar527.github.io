$(document).ready(function() {
	$('.scroll-target').on('click', function(e) {
		e.preventDefault();
		$('#overlay').animate({
			opacity: 0,
		}, 400, function() {
			// Animation complete.
		});
		// Adding a delay before navigation
		setTimeout(function() {
			window.location.href = $(e.target).attr('href');
		}, 400); // Delay in milliseconds
		
		$('#overlay').animate({
			opacity: 1,
		}, 400, function() {
			// Animation complete.
		});
	}); 
});