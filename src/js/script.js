	
if (typeof Swiper === 'function') {
	new Swiper('.services_slider', {
		spaceBetween: 30,
		pagination: {
			el: '.services_slider__pagination',
			clickable: true,
		},
	});
}
if (typeof Fancybox !== 'undefined') {
	Fancybox.bind('[data-fancybox="gallery_1"]');
}
