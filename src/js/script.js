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

// var swiper = new Swiper('.services_slider', {
// 	pagination: {
// 		el: '.slider_pagination',
// 	},
// });

var swiper = new Swiper(".services_slider", {
	spaceBetween: 30,
	pagination: {
	  el: ".slider_pagination",
	  clickable: true,
	},
  });