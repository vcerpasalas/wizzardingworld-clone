// Se lee información de la API sobre los libros (título, descripción y portada)

const app = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);

var request = new XMLHttpRequest();
request.open("GET", "https://vcerpasalas.github.io/wizzardingworld-clone/json/libros.json", true);

request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach((book) => {
      console.log(book);

      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h2 = document.createElement("h2");
      h2.textContent = book.title;
      h2.className = "card__title";

      const imageBook = document.createElement("img");
      imageBook.className = "card__image-container";
      imageBook.setAttribute("alt", book.title);
      imageBook.setAttribute("src", book.image);
      imageBook.classList.add("card__image");

      const p = document.createElement("p");
      p.className = "card__text";
      book.description = book.description.substring(0, 300);
      p.textContent = `${book.description}...`;

      container.appendChild(card);
      card.appendChild(h2);
      card.appendChild(imageBook);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement("error");
    errorMessage.textContent = `No está funcionando`;
    app.appendChild(errorMessage);
  }
};

request.send();

// Aplicación de Callbacks - Ejemplo libros de Harry Potter

const books = [
  {
    id: 1,
    title: "1: Harry Potter y la piedra filosofal",
  },
  {
    id: 2,
    title: "2: Harry Potter y la cámara secreta",
  },
  {
    id: 3,
    title: "3: Harry Potter y el prisionero de Azkaban",
  },
];

function getBookById(id, callback) {
  const book = books.find((book) => book.id === id);
  if (!book) {
    const error = new Error();
    error.message = "Book not found!";
    return callback(error);
  }

  callback(null, book);
}

getBookById(2, (err, book) => {
  if (err) {
    return console.log(err.message);
  }

  return console.log(book);
});

document.addEventListener("DOMContentLoaded", documentReady);
