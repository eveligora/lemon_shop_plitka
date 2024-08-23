if (window.location.pathname === '/price.html') {
	const tableBTN = document.querySelector('.table_price1__head');
	const tableDATA = document.querySelector('.table_price1__data');
	const arrow = document.querySelector(".price_img__arrow");

	tableBTN.addEventListener('click', function () {
		tableDATA.classList.toggle('active');
		
		if (tableDATA.classList.contains('active')) {
			arrow.classList.add("closed")
		} else { arrow.classList.remove("closed") }
	});


}
