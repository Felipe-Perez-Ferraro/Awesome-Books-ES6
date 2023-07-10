import {
  authorInpt, booksContainer, nameInpt,
} from './ids.js';

const errorMessage = document.querySelector('.errorMessage');
let books = [];

export const printBooksToUI = () => {
  while (booksContainer.firstChild) {
    booksContainer.removeChild(booksContainer.firstChild);
  }

  if (books.length > 0) {
    books.forEach((book) => {
      const div = document.createElement('div');
      div.classList.add('list__section__book__content');
      div.innerHTML = `
              <h3 class="list__section__book__features">"${book.title}" by ${book.author}</h3>
              <button data-id="${book.id}" class="removeBook">Remove</button>
              `;
      booksContainer.appendChild(div);
    });
  } else {
    const message = document.createElement('h5');
    message.textContent = "There isn't any book yet...";
    booksContainer.appendChild(message);
  }

  localStorage.setItem('books', JSON.stringify(books));

  if (books.length >= 7) {
    booksContainer.style.height = 'auto';
    booksContainer.style.marginBottom = '30px';
  } else {
    booksContainer.style.height = 'calc(100vh - 241px)';
  }
};

export class Books {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

export const addBook = () => {
  if (nameInpt.value === '' || authorInpt.value === '') {
    errorMessage.style.display = 'block';
  } else {
    const newBook = new Books(books.length, nameInpt.value, authorInpt.value);
    books = [...books, newBook];
    errorMessage.style.display = 'none';
  }
};

export const removeBook = (el) => {
  if (el.target.classList.contains('removeBook')) {
    const bookId = Number(el.target.getAttribute('data-id'));
    const newBooks = books.filter((item) => item.id !== bookId);
    books = newBooks;
    printBooksToUI();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('books')) || [];
  books = data;
  printBooksToUI();
});