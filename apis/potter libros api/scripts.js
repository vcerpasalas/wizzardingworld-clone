const app = document.getElementById("root");

const logo = document.createElement("img");

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
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

      const imageBook = document.createElement("img");
      imageBook.setAttribute("alt", book.title);
      imageBook.setAttribute("src", book.image);
      imageBook.classList.add("card__image");

      const p = document.createElement("p");
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

document.addEventListener("DOMContentLoaded", documentReady);
