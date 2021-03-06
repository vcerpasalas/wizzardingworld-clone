// Buscador de personajes del universo Harry Potter y Animales Fantásticos

const charactersList = document.getElementById("charactersList");
const searchBar = document.getElementById("searchBar");
let hpCharacters = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = hpCharacters.filter((character) => {
    return character.name.toLowerCase().includes(searchString) || character.house.toLowerCase().includes(searchString);
  });
  displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("https://vcerpasalas.github.io/wizzardingworld-clone/json/characters.json");
    hpCharacters = await res.json();
    displayCharacters(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>Casa: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
    })
    .join("");
  charactersList.innerHTML = htmlString;
};

loadCharacters();

document.addEventListener("DOMContentLoaded", documentReady);
