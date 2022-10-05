'use strict';

const swiper = new Swiper('.swiper', {
	slidesPerView: 2.5,
	spaceBetween: 30,
	mousewheel: true,
	autoplay: true,
	centeredSlides: true,
	loop: true,
	keyboard: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const el = document.querySelectorAll('.swiper-slide');
el.forEach((element) => {
	element.addEventListener('mousemove', (e) => {
		element.style.backgroundPositionY = -e.offsetY + 'px';
		swiper.autoplay.stop();
	});
	element.addEventListener('mouseleave', (e) => {
		element.style.backgroundPositionY = '0';
		swiper.autoplay.start();
	});
});
