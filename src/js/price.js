// if (window.location.pathname === '/price.html') {
	const tableBTN = document.querySelectorAll('.table_price_head');
	const tableDATA = document.querySelectorAll('.table_price_data');
	const arrow = document.querySelectorAll('.price_img__arrow');

if (tableBTN) {
tableBTN.forEach(function(e, index) {
    e.addEventListener('click', function() {
        console.log(index);
		
		tableDATA[index].classList.toggle("active")

		if (tableDATA[index].classList.contains('active')) {
			arrow[index].classList.add('closed');
		} else {
			arrow[index].classList.remove('closed');
		}


    });
});
}