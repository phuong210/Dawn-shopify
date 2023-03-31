// add header
const header = document.querySelector('header');
let heightHeader = header.offsetHeight;
let lastScrollTop = 0;

console.log(heightHeader);

window.addEventListener('scroll', () => {
    if (window.pageYOffset >=  (sizeAnnouncement + heightHeader)) {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if(st > lastScrollTop) {
        header.classList.remove('active');
      }
      else {
        header.classList.add('active');
      }
        lastScrollTop = st <= 0 ? 0 : st;
    }
    else {
      header.classList.remove('active');
    }
})


// menu mobile
const announcement = document.querySelector('.announcement-bar');
let sizeAnnouncement = announcement.dataset.blocksSize;
let heightAnnouncement = 0;
if (sizeAnnouncement > 0) {
  heightAnnouncement = announcement.clientHeight;
  // console.log(heightAnnouncement);
}

const menu = document.querySelector('.menu__link-item');

const btnMenu = document.querySelector('.hamburger');
const btnClose = document.querySelector('.button-close');
const navMenu = document.querySelector('.header__menu');
const btnSubMenu = document.querySelector('.btn__link-submenu');
const subMenu = document.querySelector('.header__menu-child');
const menuLinks = document.querySelectorAll('.menu-item__link');
const btnBack = document.querySelector('.sub-close');

const topMenu = heightAnnouncement + heightHeader;
// console.log(topMenu);
document.documentElement.style.setProperty("--topMenu",`${topMenu}px`);

btnMenu.addEventListener('click', (e) => {
  e.preventDefault();
  navMenu.classList.toggle('active');
  btnMenu.classList.add('active');
  btnClose.classList.add('active');
  document.querySelector('body').style.overflow = 'hidden';
});

btnClose.addEventListener('click', () => {
  navMenu.classList.remove('active');
  btnMenu.classList.remove('active');
  btnClose.classList.remove('active');
  document.querySelector('body').removeAttribute('style');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    btnMenu.classList.remove('active');
    btnClose.classList.remove('active');
  });
});

btnSubMenu.addEventListener('click', (e)=> {
  e.preventDefault();
  subMenu.classList.add('active');
});


btnBack.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.parentNode.classList.remove('active');
  });

const subMenuCloseBtn = document.querySelector('.sub__close');
if (subMenuCloseBtn) {
  subMenuCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    subMenu.classList.remove('active');
  });
}

// search
  const btnSearch = document.querySelector('#btn-search');
  const modalSearch = document.querySelector('#form-search');
  const btnCloseModal = document.querySelector('.btnClose');
  const overlayForm = document.querySelector('.overlayFormSearch');
  const body = document.querySelector('body');

btnSearch.addEventListener('click', () => {
  modalSearch.classList.add('active-search');
  overlayForm.classList.add('active');
  body.style.overflow = 'hidden';
})

btnCloseModal.addEventListener('click', () => {
  modalSearch.classList.remove('active-search');
  overlayForm.classList.remove('active');
  body.removeAttribute('style');
})

overlayForm.addEventListener('click', () => {
  modalSearch.classList.remove('active-search');
  overlayForm.classList.remove('active');
  body.removeAttribute('style');
})


