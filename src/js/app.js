import * as flsFunctions from "./modules/function.js";
flsFunctions.isWebp();

import * as ibgFunction from "./modules/ibg.js";
ibgFunction;

document.addEventListener('DOMContentLoaded', () => {

	const headerBurger = document.querySelector('.header__burger');

	if (headerBurger) {
		headerBurger.addEventListener('click', (e) => {
			document.body.classList.toggle('_lock');
			headerBurger.classList.toggle('_active');
		});
	}

	const headerMenu = document.querySelector('.header__menu');

	headerBurger.addEventListener('click', () => {
		headerMenu.classList.toggle('_active');
	});

	const headerMenuLink = document.querySelectorAll('.header__menu > li > a');

	headerMenuLink.forEach(item => {
		item.addEventListener('click', () => {
			headerMenu.classList.remove('_active');
			headerBurger.classList.remove('_active');
			document.body.classList.remove('_lock');
		});
	});

});