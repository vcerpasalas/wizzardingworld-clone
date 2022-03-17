// Se lee información de la API sobre las películas (título, año de estreno y portada)

const app = document.getElementById("root");
const logo = document.createElement("img");

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open("GET", "https://vcerpasalas.github.io/wizzardingworld-clone/json/peliculas.json", true);

request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach((film) => {
      console.log(film);

      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h2 = document.createElement("h2");
      h2.textContent = film.title;
      h2.className = "card__title";

      const imageBook = document.createElement("img");
      imageBook.className = "card__image-container";
      imageBook.setAttribute("alt", film.title);
      imageBook.setAttribute("src", film.image);
      imageBook.classList.add("card__image");

      const p = document.createElement("p");
      p.textContent = film.fecha_de_lanzamiento;
      p.className = "card__text";

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
