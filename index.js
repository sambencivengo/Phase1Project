//===============================================================
// URLS
//===============================================================
const advice = 'advice-how-to-and-miscellaneous';
const fiction = 'combined-print-and-e-book-fiction';
const nonFiction = 'combined-print-and-e-book-nonfiction';
const science = 'science';
const sports = 'sports';
const travel = 'travel';
const key = '.json?api-key=W4VNU0C9gvXzMO4sfXzGCQlsHAJEplS1';
const baseURL = `https://api.nytimes.com/svc/books/v3/lists/current/`;

function start() {
  getBooks();
}

function renderBook(books) {
  const image = document.createElement('img');
  image.className = 'book-image';
  const h1 = document.createElement('h1');
  h1.className = 'book-title';
  const h2 = document.createElement('h2');
  h2.className = 'book-author';
  const descriptionContainer = document.createElement('div');
  descriptionContainer.className = 'description-container';
  const p = document.createElement('p');
  p.className = 'book-description';
  const div = document.createElement('div');
  div.className = 'book-card';
  const bookInfo = document.createElement('div');
  bookInfo.className = 'book-info';
  image.src = books.book_image;

  h1.textContent = books.title;
  h2.textContent = books.author;
  p.textContent = books.description;
  bookInfo.append(h1, h2);
  //console.log(bookInfo)
  descriptionContainer.append(p);

  div.append(image, bookInfo, descriptionContainer);
  bookContainer.appendChild(div);
}

const bookContainer = document.getElementById('book-container');
console.log();
function getBooks() {
  fetch(baseURL + fiction + key)
    .then((resp) => resp.json())
    .then((data) => {
      data.results.books.forEach(renderBook);
    });
}
console.log('testing');

// const menuSelect = document.getElementById('genre-form');

// menuSelect.addEventListener('change', () => {
//   getBooks(menuSelect.value);
// });
document.addEventListener('DOMContentLoaded', start());
