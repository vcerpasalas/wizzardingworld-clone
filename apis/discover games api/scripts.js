// Se lee información de la API sobre las películas (título y portada)

const app = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);

var request = new XMLHttpRequest();
request.open("GET", "https://vcerpasalas.github.io/wizzardingworld-clone/json/juegos.json", true);

request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach((game) => {
      console.log(game);

      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h2 = document.createElement("h2");
      h2.textContent = game.title;
      h2.className = "card__title";

      const imageGame = document.createElement("img");
      imageGame.className = "card__image-container";
      imageGame.setAttribute("src", game.image);
      imageGame.classList.add("card__image");

      container.appendChild(card);
      card.appendChild(h2);
      card.appendChild(imageGame);
    });
  } else {
    const errorMessage = document.createElement("error");
    errorMessage.textContent = `No está funcionando`;
    app.appendChild(errorMessage);
  }
};

request.send();

document.addEventListener("DOMContentLoaded", documentReady);
