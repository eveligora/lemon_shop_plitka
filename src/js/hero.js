
if (window.location.pathname === '/index.html') {
	new Swiper('.hero', {
		direction: 'horizontal',
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}