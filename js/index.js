import { Books, printBooksToUI } from '../modules/class.js';
import toggleMenu from '../modules/navbar.js';
import {
  authorInpt, booksContainer, bookForm, nameInpt, submitBtn, menuOpen, list, addNew, contact,
} from '../modules/ids.js';

// Listeners
submitBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  const aBook = new Books(Math.random, nameInpt.value, authorInpt.value);
  aBook.addBook();
  printBooksToUI();
  bookForm.reset();
});

booksContainer.addEventListener('click', (el) => {
  const rBook = new Books(Math.random, nameInpt.value, authorInpt.value);
  rBook.removeBook(el);
});

// Navigation Links
const links = document.querySelectorAll('.header__navbar__list__item a');
list.style.display = 'block';
addNew.style.display = 'none';
contact.style.display = 'none';

links.forEach((e) => {
  e.addEventListener('click', (el) => {
    toggleMenu();
    el.preventDefault();
    if (el.target.classList.contains('list')) {
      list.style.display = 'block';
      addNew.style.display = 'none';
      contact.style.display = 'none';
    } else if (el.target.classList.contains('add')) {
      list.style.display = 'none';
      addNew.style.display = 'block';
      contact.style.display = 'none';
    } else if (el.target.classList.contains('contact')) {
      list.style.display = 'none';
      addNew.style.display = 'none';
      contact.style.display = 'block';
    }
  });
});

// Navbar
menuOpen.addEventListener('click', toggleMenu);