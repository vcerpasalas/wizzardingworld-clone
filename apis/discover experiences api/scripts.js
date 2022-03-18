// Se lee información de la API sobre las películas (título y portada)

const app = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);

var request = new XMLHttpRequest();
request.open("GET", "https://vcerpasalas.github.io/wizzardingworld-clone/json/obras-teatro.json", true);

request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach((play) => {
      console.log(play);

      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h2 = document.createElement("h2");
      h2.textContent = play.title;
      h2.className = "card__title";

      const imagePlay = document.createElement("img");
      imagePlay.className = "card__image-container";
      imagePlay.setAttribute("src", play.image);
      imagePlay.classList.add("card__image");

      container.appendChild(card);
      card.appendChild(h2);
      card.appendChild(imagePlay);
    });
  } else {
    const errorMessage = document.createElement("error");
    errorMessage.textContent = `No está funcionando`;
    app.appendChild(errorMessage);
  }
};

request.send();

document.addEventListener("DOMContentLoaded", documentReady);
