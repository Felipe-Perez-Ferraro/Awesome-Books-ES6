const toggleMenu = () => {
  const menuOpen = document.getElementById('menuOpen');
  const navbar = document.querySelector('.header__navbar__list__container');
  navbar.classList.toggle('showNavbar');

  if (window.matchMedia('(max-width: 767px)').matches) {
    if (navbar.classList.contains('showNavbar')) {
      menuOpen.classList.add('fa-times');
      menuOpen.classList.remove('fa-bars');
      navbar.style.left = '0';
      document.body.style.overflow = 'hidden';
    } else {
      menuOpen.classList.remove('fa-times');
      menuOpen.classList.add('fa-bars');
      document.body.style.overflow = 'scroll';
      navbar.style.left = '-100%';
    }
  }
};

export default toggleMenu;