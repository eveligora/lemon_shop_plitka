
if (window.location.pathname === '/') {
	new Swiper('.hero', {
		direction: 'horizontal',
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}