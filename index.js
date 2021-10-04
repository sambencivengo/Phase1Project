console.log(apiKey);

// every card should be carrying the ID book-card
// append to book-container

const mainURL =
  'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=W4VNU0C9gvXzMO4sfXzGCQlsHAJEplS1';

function start() {
  getBooks();
}
const bookContainer = document.getElementById('book-container');

function getBooks() {
  fetch(mainURL)
    .then((resp) => resp.json())
    .then((data) => {
      data.results.books.forEach((books) => {
        const image = document.createElement('img');
        image.className = 'book-image';
        const h1 = document.createElement('h1');
        h1.className = 'book-title';
        const h2 = document.createElement('h2');
        h2.className = 'book-image';
        const p = document.createElement('p');
        p.className = 'book-description';
        const bookCard = document.getElementById('book-card');
        image.src = books.book_image;
        // console.log(image);
        h1.textContent = books.title;
        h2.textContent = books.author;
        p.textContent = books.description;
        bookCard.append(image, h1, h2, p);
        console.log(bookCard);
        bookContainer.appendChild(bookCard);
      });
    });
}
console.log('testing');
document.addEventListener('DOMContentLoaded', start());
