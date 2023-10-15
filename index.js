function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`Network response was not ok: ${resp.status}`);
      }
      return resp.json();
    })
    .then((json) => renderBooks(json))
    .catch((error) => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const booksContainer = document.getElementById("books-container");

  if (!booksContainer) {
    console.error("Books container not found");
    return;
  }

  booksContainer.innerHTML = '';

  books.forEach((book) => {
  
    const bookName = book.name || "Unknown Title";
    const listItem = document.createElement("li");
    listItem.textContent = bookName;
    booksContainer.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', fetchBooks);
