// every card should be carrying the ID book-card
// append to book-container
const listsURL =
  'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=W4VNU0C9gvXzMO4sfXzGCQlsHAJEplS1';
const getLists = () => {
  fetch(listsURL)
    .then((resp) => resp.json())
    .then((data) =>
      data.results.forEach((books) => {
        console.log(books);
      })
    );
};

//===============================================================
// URLS
//===============================================================
// const combined
const printEBookNonFiction =
  'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=W4VNU0C9gvXzMO4sfXzGCQlsHAJEplS1';
const printEBookFiction =
  'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=W4VNU0C9gvXzMO4sfXzGCQlsHAJEplS1';
const hardcoverFiction =
  'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=W4VNU0C9gvXzMO4sfXzGCQlsHAJEplS1';

function start() {
  getBooks();
  getLists();
}
const bookContainer = document.getElementById('book-container');

function getBooks() {
  fetch(printEBookNonFiction)
    .then((resp) => resp.json())
    .then((data) => {
      data.results.books.forEach((books) => {
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
        const div = document.createElement('book-card');
        div.className = 'book-card';
        image.src = books.book_image;

        h1.textContent = books.title;
        h2.textContent = books.author;
        p.textContent = books.description;
        descriptionContainer.append(p);
        div.append(image, h1, h2, descriptionContainer);
        console.log(div);
        bookContainer.appendChild(div);
      });
    });
}
console.log('testing');
document.addEventListener('DOMContentLoaded', start());
