function fetchBooks() {
  const bookAPI = "https://anapioficeandfire.com/api/books";
  return fetch(bookAPI)
    .then((res) => res.json())
    .then((json) => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function findBook(num) {
  const bookAPI = "https://anapioficeandfire.com/api/books";
  return fetch(bookAPI)
    .then((res) => res.json())
    .then((json) => console.log(json[num-1]));
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
