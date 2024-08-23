const review = new Swiper('.swiper_review', {
	
	slidesPerView: 2,
	loop: true,
	spaceBetween: 40,
	navigation: {
		nextEl: '.reviews__btn_right',
		prevEl: '.reviews__btn_left',
	  },
	  noSwiping: true,
	  noSwipingClass: 'noswip',
	  breakpoints: {
		
		320: {
		  direction: 'vertical', 
		  slidesPerView: 2,
		},

		768: {
		  direction: 'horizontal', 
		  slidesPerView: 2,
		}
	  }
	  
});
