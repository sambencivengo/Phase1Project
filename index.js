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
  getBooks(fiction);
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
  descriptionContainer.append(p);
  div.append(image, bookInfo, descriptionContainer);
  //bookContainer.appendChild(div);

  

  //create comment container 
  const form=document.createElement('form')
  const inputText=document.createElement('input')
  const inputButton=document.createElement('input')
  const commentbox=document.createElement('div')
  const divComment=document.getElementById('comment-container')
  

  //create like button for every container
  const likeContainer=document.createElement('div')
  const likeButton=document.createElement('button')
  const likeNum=document.createElement('p')
  likeContainer.className='like-container'
  likeNum.innerText='0'
  likeNum.setAttribute("id", "likeNum")
  likeButton.innerText='🖤'
  likeButton.setAttribute("id", "likeButton")
  likeContainer.setAttribute("id", "likeContainer")
  likeContainer.append(likeNum,likeButton)
  //console.log(likeContainer)
  commentbox.append(likeContainer)

  likeButton.addEventListener('click',function(){
   const like=parseInt(likeNum.innerText)
  const newLike=like+1
  likeNum.innerText=newLike
  })


  
  // set attribute for comment container
  form.className='form-comment'
  commentbox.className='comment-box'
  inputText.type="text"
  inputText.setAttribute("id", "comment1");
  inputButton.type="submit"
  inputButton.value="💬"
  inputButton.setAttribute("id", "button1");
  form.append(inputText,inputButton)
  commentbox.append(form)
  //bookContainer.append(commentbox)
  
  

   


  //form for comments in every book
  form.addEventListener('submit',function(e){
    e.preventDefault()
    const comment=e.target.comment1.value
    const p=document.createElement('p')
    p.className='commentP'
    p.innerText=comment
    likeContainer.append(p)
  })

 
  const divBookComment=document.createElement('div')
  divBookComment.className='book-comment'
  divBookComment.append(div,commentbox)
  bookContainer.append(divBookComment)


  
  

}



const commentContainer=document.getElementById('comment-container')
const bookContainer = document.getElementById('book-container');
console.log();

function getBooks(genre) {
  fetch(baseURL + genre + key)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      data.results.books.forEach(renderBook);
})
}

// const menuSelect = document.getElementById('genre-form');

//===============================================================
//DROP DOWN MENU
//===============================================================

const createEl = (tag) => document.createElement(tag);
const navBar = document.getElementById('nav-bar');
const dropDownForm = createEl('form');
const label = createEl('label');
const select = createEl('select');
select.id = 'drop-down';
// FICTION
const selectFiction = createEl('option');
selectFiction.value = 'combined-print-and-e-book-fiction';
selectFiction.textContent = 'Fiction';
// NON-FICTION
const selectNonFiction = createEl('option');
selectNonFiction.value = 'combined-print-and-e-book-nonfiction';
selectNonFiction.textContent = 'Non-Fiction';
// ADVICE
const selectAdvice = createEl('option');
selectAdvice.value = 'advice-how-to-and-miscellaneous';
selectAdvice.textContent = 'Advice';
// SCIENCE
const selectScience = createEl('option');
selectAdvice.value = 'science';
selectScience.textContent = 'Science';
// SPORTS
const selectSports = createEl('option');
selectSports.value = 'sports';
selectSports.textContent = 'Sports';
// PAPERBACK GRAPHIC BOOKS
const selectGraphic = createEl('option');
selectGraphic.value = 'paperback-graphic-books';
selectGraphic.textContent = 'Graphic Books';
label.textContent = 'Choose a genre:  ';

navBar.append(label);
label.append(select);
select.append(
  selectFiction,
  selectNonFiction,
  selectAdvice,
  selectScience,
  selectSports,
  selectGraphic
);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
// fetch('https://api.nytimes.com/svc/books/v3/lists/names' + key)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));

select.addEventListener('change', () => {
  removeAllChildNodes(bookContainer);
  // console.log(select.value);
  getBooks(select.value);
});
document.addEventListener('DOMContentLoaded', start());
