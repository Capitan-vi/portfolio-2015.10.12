window.onload = function() {
	var link = document.querySelector('.feed-back-link');
	var popup = document.querySelector('.feed-back-form');
	var close = document.querySelector('.js-feed-back-form_close');
	var form = popup
	var name = form.querySelector('.name-field');
	var email = form.querySelector('.email-field');
	var storage = localStorage.getItem('name');

	link.addEventListener('click', function(event) {
		event.preventDefault();
		popup.classList.add('js-feed-back-form_show');
		if (storage) {
			name.value = storage;
			email.focus();
		} else {
			name.focus();
		}
	}, false);

	form.addEventListener('submit', function(event){
		event.preventDefault();
		if (!name.value || !email.value) {
			event.preventDefault();
			console.log('Для отправки необходимо заполнить все поля формы');
		}
	}, false);

	close.addEventListener('click', function(event) {
		event.preventDefault();
		popup.classList.remove('js-feed-back-form_show');
	}, false);

	window.addEventListener('keydown', function(event) {
		if (event.keyCode == 27 && popup.classList.contains('js-feed-back-form_show')) {
			popup.classList.remove('js-feed-back-form_show');
		}
	}, false);

	$(document).ready(function(){
		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 700);
			e.preventDefault();
		});
		return false;
	});

}
