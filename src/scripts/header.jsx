const headerModalUser = document.querySelector('.header__modalUser');
const headerUserPicture = document.querySelector('.header__topContainer__rightSide__user__picture');
const headerUserName = document.querySelector('.header__topContainer__rightSide__user__name');

const headerModalMenu = document.querySelector('.header__modalMenu');
const headerHamburger = document.querySelector('.header__topContainer__rightSide__hamburger');
const headerModalMenuX = document.querySelector('.header__modalMenu__topLogoAndX__a');
const headerLogo = document.querySelector('.header__logo');

headerHamburger.addEventListener('click', evt => {
  evt.preventDefault();
  headerModalMenu.classList.remove('invisible');
});
document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    headerModalMenu.classList.add('invisible');
  }
});
headerModalMenuX.addEventListener('click', evt => {
  evt.preventDefault();
  headerModalMenu.classList.add('invisible');
});
headerLogo.addEventListener('click', evt => {
  evt.preventDefault();
  headerModalMenu.classList.add('invisible');
});

headerUserPicture.addEventListener('click', evt => {
  evt.preventDefault();
  headerModalUser.classList.remove('invisible');
});
headerUserName.addEventListener('click', evt => {
  evt.preventDefault();
  headerModalUser.classList.remove('invisible');
});
document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    headerModalUser.classList.add('invisible');
  }
});
window.addEventListener('click', evt => {
  if (evt.target === headerUserPicture) {
    console.log(evt.target);
    return;
  }
  if (evt.target === headerUserName) {
    return;
  }
  if (evt.target === headerModalUser) {
    return;
  }
  if (evt.target !== headerModalUser) {
    headerModalUser.classList.add('invisible');
  }
});
