const lastestNewsNews = document.getElementById("lastestNewsNews");

const renderInfoLastestNewsNews = (src, href, paragraph, elemento) => {
  const fragment = document.createDocumentFragment();

  const divLastestNewsNews = document.createElement("div");
  divLastestNewsNews.classList.add("lastest-news__new");

  const imageContainerLastestNews = document.createElement("figure");
  imageContainerLastestNews.classList.add("lastest-news__image-container");

  const imageLastestNews = document.createElement("img");
  imageLastestNews.setAttribute("src", src);
  imageLastestNews.setAttribute("alt", "imagen de news");
  imageLastestNews.classList.add("lastest-news__image");

  const lastestNewsLinkParagraph = document.createElement("p");
  lastestNewsLinkParagraph.classList.add("lastest-news__link-paragraph");

  const lastestNewsParagraph = document.createElement("a");
  lastestNewsParagraph.setAttribute("href", href);
  lastestNewsParagraph.textContent = paragraph;
  lastestNewsParagraph.classList.add("lastest-news__paragraph");

  divLastestNewsNews.appendChild(imageContainerLastestNews);
  imageContainerLastestNews.appendChild(imageLastestNews);
  divLastestNewsNews.appendChild(lastestNewsLinkParagraph);
  lastestNewsLinkParagraph.appendChild(lastestNewsParagraph);
  fragment.appendChild(divLastestNewsNews);
  elemento.appendChild(fragment);
};

const loadedLastestNewsNews = async () => {
  try {
    const response = await fetch(
      "https://github.com/vcerpasalas/wizzardingworld-clone/blob/develop/json/lastestNews.json"
    );
    dataInfo = await response.json();
    for (let index = 0; index < dataInfo.length; index++) {
      renderInfoLastestNewsNews(dataInfo[index].src, dataInfo[index].href, dataInfo[index].paragraph, lastestNewsNews);
    }
    //renderInfoLastestNewsNews(dataInfo.src, dataInfo.href, dataInfo.paragraph, lastestNewsNews);
  } catch (error) {
    console.log(error);
  }
};

loadedLastestNewsNews();

document.addEventListener("DOMContentLoaded", documentReady);
