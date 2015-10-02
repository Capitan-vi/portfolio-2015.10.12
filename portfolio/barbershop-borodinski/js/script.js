window.onload = function() {
	var link = document.querySelector('.account-menu-enter');
	var popup = document.querySelector('.form-popup');
	var close = document.querySelector('.js-form-popup_close');
	var form = popup
	var login = form.querySelector('.login-field');
	var password = form.querySelector('.password-field');
	var storage = localStorage.getItem('login');

	link.addEventListener('click', function(event) {
		event.preventDefault();
		popup.classList.add('js-form-popup_show');
		if (storage) {
			login.value = storage;
			password.focus();
		} else {
			login.focus();
		}
	}, false);

	form.addEventListener('submit', function(event){
		event.preventDefault();
		if (!login.value || !password.value) {
			event.preventDefault();
			console.log('Для входа в личный кабинет ввести логин и пароль');
		}
	}, false);

	close.addEventListener('click', function(event) {
		event.preventDefault();
		popup.classList.remove('js-form-popup_show');
	}, false);

	window.addEventListener('keydown', function(event) {
		if (event.keyCode == 27 && popup.classList.contains('js-form-popup_show')) {
			popup.classList.remove('js-form-popup_show');
		}
	}, false);

}
