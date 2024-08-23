if (window.location.pathname === '/price.html') {
	const tableBTN = document.querySelector('.table_price1__head');
	const tableDATA = document.querySelector('.table_price1__data');
	tableBTN.addEventListener('click', function () {
		tableDATA.classList.toggle('active');
	});
}
