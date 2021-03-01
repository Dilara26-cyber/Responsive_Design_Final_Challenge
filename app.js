const hmbrg_icon = document.querySelector('.fa-ellipsis-v');
const hmbrg_list = document.querySelector('.nav__list');
const nav = document.querySelector('.nav');

hmbrg_icon.addEventListener('click', () => {
  nav.classList.toggle('nav--open');
  hmbrg_list.classList.toggle('nav--active');
});
