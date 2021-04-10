//Menu mobile
const $body = document.querySelector('body');
const $menu = document.querySelector('.header__nav');
const $links = document.querySelectorAll('.header__nav a');
const $menuBtn = document.querySelector('.menu-btn');

$links.forEach((link) => {
  link.addEventListener('click', activeMenu);
});

$menuBtn.addEventListener('click', activeMenu);

function activeMenu() {
  if (window.innerWidth < 768) {
    $menu.classList.toggle('menu-open');
    $menuBtn.classList.toggle('menu-btn-open');
    $body.classList.toggle('noscrol');
  }
}
