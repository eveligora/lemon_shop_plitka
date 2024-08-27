const header = document.querySelector('.header');
window.onscroll = function () {
	scrollFunction();
};
function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		header.classList.add('header--scroll');
	} else {
		header.classList.remove('header--scroll');
	}
}

if (typeof Swiper === 'function') {
	new Swiper('.services_slider', {
		spaceBetween: 30,
		pagination: {
			el: '.services_slider__pagination',
			clickable: true,
		},
	});
}
if (typeof Swiper !== 'undefined') {
	Fancybox.bind('[data-fancybox="gallery_1"]');
}
