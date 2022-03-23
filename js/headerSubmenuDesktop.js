export const discoverSubMenuDataOnDesktop = [
  { id: 1, title: "books", image: "./images/header/book.png", link: "./apis/discover-books-api/index.html" },
  { id: 2, title: "films", image: "./images/header/films.webp", link: "./apis/discover-films-api/index.html" },
  {
    id: 3,
    title: "portkey games",
    image: "./images/header/portkey-games.png",
    link: "./apis/discover-games-api/index.html",
  },
  { id: 4, title: "on stage", image: "./images/header/on-stage.png", link: "./apis/discover-teatro-api/index.html" },
  {
    id: 5,
    title: "experiences",
    image: "./images/header/experiences.webp",
    link: "./apis/discover-experiences-api/index.html",
  },
];
export const newsFeaturesSubMenuDataOnDesktop = [
  {
    id: 10,
    title: "news",
    image: "./images/header/news.webp",
    link: "./news.html",
  },
  {
    id: 11,
    title: "features",
    image: "./images/header/features.png",
    link: "./features.html",
  },
];

export const renderHTMLSubmenu = (subMenu) => {
  let html = "";
  subMenu.forEach((submenuEL) => {
    const { id, image, title, link } = submenuEL;
    html += `
      <div class="submenu-card" id="${id}">
      <a href="${link}">
          <figure class="card__image-container">
            <img class="card__image" src="${image}" alt="" />
          </figure>
          <div class="card__inner-wrapper">
            <p class="card__title">${title}</p>
            <figure class="card__decoration-icon-container">
              <img class="card__decoration-icon" src="./images/header/scarcity-icon.svg" alt="" />
            </figure>
          </div>      
          </a>
          </div>      
      `;
  });
  return html;
};
