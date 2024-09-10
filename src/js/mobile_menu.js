function checkScreenWidth() {
    if (document.documentElement.clientWidth < 1023.98) {
        document.querySelectorAll('.header_nav__link').forEach(link => {
            link.addEventListener('click',  event => {
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
    }
}
window.onload = checkScreenWidth();

const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.header_nav__menu');

function removeOpenClass() {
    burger.classList.remove('open');
    menu.classList.remove('open');
}

document.addEventListener('click', (event) => {
    if (!burger.contains(event.target) && !menu.contains(event.target)) {
        removeOpenClass();
    }
});

burger.addEventListener('click', (event) => {
    event.stopPropagation();
    burger.classList.toggle('open');
    menu.classList.toggle('open');
});
