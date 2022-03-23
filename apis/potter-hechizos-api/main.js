// Generador random de hechizos - contiene hasta 115 hechizos del universo Harry Potter

const hechizo = document.querySelector(".card__container-hechizo");
const uso = document.querySelector(".card__container-uso");
const nextBtn = document.querySelector(".card__buttons-next");
const tweetbtn = document.querySelector(".card__buttons-twitter");

const getHechizo = async () => {
  const res = await fetch("https://vcerpasalas.github.io/wizzardingworld-clone/json/hechizos.json");
  const hechizos = await res.json();
  const num = Math.floor(Math.random() * hechizos.length);

  const item = hechizos[num];
  const quote = item.hechizo;
  const authorName = item.uso;

  hechizo.innerText = quote;
  uso.innerText = authorName;

  // Puedes compartir tu hechizo por Twitter
  tweetbtn.href = `https://twitter.com/intent/tweet?text=${quote} - ${authorName}`;
};

nextBtn.addEventListener("click", getHechizo);
getHechizo();

document.addEventListener("DOMContentLoaded", documentReady);
