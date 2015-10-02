window.onload = function(){
	$(document).ready(function(){
		$('a.js-soft-scroll').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 700);
			e.preventDefault();
		});
		return false;
	});

	$('#presentation').removeClass('low-shadow');
}
