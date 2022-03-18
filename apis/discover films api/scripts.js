// Se lee información de la API sobre las películas (título y portada)

const app = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");
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

      const imageFilm = document.createElement("img");
      imageFilm.className = "card__image-container";
      imageFilm.setAttribute("src", film.image);
      imageFilm.classList.add("card__image");

      container.appendChild(card);
      card.appendChild(h2);
      card.appendChild(imageFilm);
    });
  } else {
    const errorMessage = document.createElement("error");
    errorMessage.textContent = `No está funcionando`;
    app.appendChild(errorMessage);
  }
};

request.send();

// Intersection Observer

const cards = document.querySelectorAll("card");

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.id, "está insersectando");
    }
  });
};

const observer = new IntersectionObserver(callback, options);
cards.forEach((element) => observer.observe(element));

document.addEventListener("DOMContentLoaded", documentReady);
