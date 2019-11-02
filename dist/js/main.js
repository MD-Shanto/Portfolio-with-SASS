const menuBtn = document.querySelector('.menu-btn'),
    hamburger = document.querySelector('.menu-btn__burger'),

    navClass = document.querySelector('.nav'),
    listClass = document.querySelector('.menu-nav'),
    MenuList  = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        navClass.classList.add('open');
        listClass.classList.add('open');
        MenuList .forEach(list => list.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        navClass.classList.remove('open');
        listClass.classList.remove('open');
        MenuList .forEach(list => list.classList.remove('open'));

        showMenu = false;
    }
}