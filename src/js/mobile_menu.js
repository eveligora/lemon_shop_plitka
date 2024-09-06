function checkScreenWidth() {
    if (document.documentElement.clientWidth < 1023.98) {
        for_mobile.insertAdjacentHTML('beforebegin', `<div class="header_logo_w">
						<a href="./" class="header_logo">
							<img src="./imgs/svg/logo.svg" alt="Logo" class="header_logo__img" />
						</a>
					</div>`)

        document.querySelectorAll('.header_nav__link').forEach(function (link) {
            link.addEventListener('click', function (event) {
                const parentLi = link.parentElement;
                const submenu = parentLi.querySelector('.header_dropdown');

                if (submenu && !parentLi.classList.contains('active')) {
                    event.preventDefault();
                    parentLi.classList.add('active');
                } else {
                    parentLi.classList.remove('active');
                }
            });
        });

    } else {
        for_desktop.insertAdjacentHTML('afterend', `<div class="header_logo_w">
            <a href="./" class="header_logo">
                <img src="./imgs/svg/logo.svg" alt="Logo" class="header_logo__img" />
            </a>
        </div>`)


    }
}

window.onload = checkScreenWidth();

const menuButton = document.querySelector(".nav__burger");
const menu = document.querySelector(".header_nav__menu");


menuButton.addEventListener("click", function () {
    menu.classList.toggle("open");
    menuButton.classList.toggle("open");

});




