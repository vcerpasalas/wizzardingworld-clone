const booksList = document.getElementById("booksList");
const searchBar = document.getElementById("searchBar");
let hpBooks = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredBooks = hpBooks.filter((book) => {
    return book.name.toLowerCase().includes(searchString) || book.libro.toLowerCase().includes(searchString);
  });
  displayBooks(filteredBooks);
});

const loadBooks = async () => {
  try {
    const res = await fetch("https://vcerpasalas.github.io/wizzardingworld-clone/libros.json");
    hpBooks = await res.json();
    displayBooks(hpBooks);
  } catch (err) {
    console.error(err);
  }
};

const displayBooks = (books) => {
  const htmlString = books
    .map((book) => {
      return `
            <li class="book">
                <h2>${book.libro}</h2>
                <p>Fecha: ${book.fecha_de_lanzamiento}</p>
                <img src="${book.image}"></img>
            </li>         
        `;
    })
    .join("");
  booksList.innerHTML = htmlString;
};

loadBooks();
