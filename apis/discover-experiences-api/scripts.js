// Se lee información de la API sobre las películas (título y portada)

const app = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);

var request = new XMLHttpRequest();
request.open("GET", "https://vcerpasalas.github.io/wizzardingworld-clone/json/experiencias.json", true);

request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach((experience) => {
      console.log(experience);

      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h2 = document.createElement("h2");
      h2.textContent = experience.title;
      h2.className = "card__title";

      const imageExperience = document.createElement("img");
      imageExperience.className = "card__image-container";
      imageExperience.setAttribute("src", experience.image);
      imageExperience.classList.add("card__image");

      const p = document.createElement("p");
      p.className = "card__text";
      experience.description = experience.description.substring(0, 300);
      p.textContent = `${experience.description}...`;

      container.appendChild(card);
      card.appendChild(h2);
      card.appendChild(imageExperience);
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
