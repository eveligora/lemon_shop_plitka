if (window.location.pathname === '/page4.html') {
	const review = new Swiper('.swiper_review', {
		direction: 'horizontal',
		loop: true,
		spaceBetween: 40,
		navigation: {
			nextEl: '.reviews__btn_right',
			prevEl: '.reviews__btn_left',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 2,
			},
		},
	});
	const review2 = new Swiper('.swiper_review2', {
		direction: 'horizontal',
		loop: true,
		spaceBetween: 40,
		navigation: {
			nextEl: '.reviews__btn_right',
			prevEl: '.reviews__btn_left',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 2,
			},
		},
	});
}
