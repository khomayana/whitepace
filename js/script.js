const btn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu-list');
btn.addEventListener('click', openMenu);
function openMenu() {
    menu.classList.toggle('menu__list_show');
    btn.classList.toggle('menu__btn_active');
}