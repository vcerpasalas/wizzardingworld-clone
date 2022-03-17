export const headerList = [
  {
    id: 1,
    title: "News & Features",
    classAndId: "news-features",
    submenu: [
      {
        subId: 1,
        subItemTitle: "News",
      },
      {
        subId: 2,
        subItemTitle: "Features",
      },
    ],
  },
  { id: 2, link: "", title: "Quizzes" },
  { id: 3, link: "", title: "Puzzles" },
  { id: 4, link: "", title: "J.K. Rowling Archive" },
  {
    id: 5,

    link: "",
    title: "Discover",
    classAndId: "discover",
    submenu: [
      { subId: 1, subItemTitle: "Discover" },
      { subId: 2, subItemTitle: "Books" },
      { subId: 3, subItemTitle: "Films" },
      { subId: 4, subItemTitle: "Portkey Games" },
      { subId: 5, subItemTitle: "On Stage" },
      { subId: 6, subItemTitle: "Experiences" },
    ],
  },
  {
    id: 6,
    link: "https://my.wizardingworld.com/sorting-hat",
    title: "Hogwarts Sorting",
  },
  {
    id: 7,
    link: "https://www.wizardingworld.com/collections/fantastic-beasts-the-secrets-of-dumbledore",
    title: "Secrets of Dumbledure",
  },
  {
    id: 8,
    link: "https://www.wizardingworld.com/store?passthrough=true&store=hpshopuk",
    title: "Shop",
  },
];

// const subMenuItemMobile = (submenu) => {
//   submenu.forEach((element) => {
//     element.innerHTML += `
//         <li class="header__menu-news-feature-item" id="${element.subId}"><a href="" class="header__menu-item-link">${element.subItemTitle}</a></li>
//       `;
//   });
// };

export const renderHTMLSubmenuOnMobile = (submenu) => {
  let html = "";
  submenu.forEach((element) => {
    const { id, title, classAndId, link } = element;
    if (element.hasOwnProperty("submenu")) {
      html += `
        <li class="header__menu-item" id"${id}">
                <div class="header__menu-item-text-arrow" id="${classAndId}-el">
                  ${title}
                  <svg width="10" height="15" class="header__submenu-arrow-icon" id="submenu-arrow-icon-${classAndId}">
                    <g stroke="#FFF" stroke-width="1.7" fill="none" fill-rule="evenodd">
                      <path d="M6.664 8.923l-5.4 5M9.364 8.09l-8.1-7.5"></path>
                    </g>
                  </svg>
                </div>
                <div class="${classAndId}__menu-container">
                  <ul class="header__menu-news-feature-list">
                    <div class="${classAndId}-menu__back-arrow-container">
                      <svg width="10" height="15" class="${classAndId}-menu__back-arrow" id="${classAndId}-back">
                        <g stroke="#FFF" stroke-width="1.7" fill="none" class="arrow-icon" fill-rule="evenodd">
                          <path d="M6.664 8.923l-5.4 5M9.364 8.09l-8.1-7.5"></path>
                        </g>
                      </svg>
                    </div>
                    <p class="header__menu-${classAndId}-title">${title}</p>
                      ${
                        title === "Discover"
                          ? `
                       <li class="header__menu-discover-item"><a class="header__menu-item-link" href="">Books</a></li>
                    <li class="header__menu-discover-item"><a class="header__menu-item-link" href="">Films</a></li>
                    <li class="header__menu-discover-item">
                      <a class="header__menu-item-link" href="">Portkey Games</a>
                    </li>
                    <li class="header__menu-discover-item"><a class="header__menu-item-link" href="">On Stage</a></li>
                    <li class="header__menu-discover-item">
                      <a class="header__menu-item-link" href="">Experiences</a>
                    </li>
                    `
                          : `
                     <li class="header__menu-news-feature-item"><a href="./news.html" class="header__menu-item-link">News</a></li>
                    <li class="header__menu-news-feature-item">
                      <a href="./features.html" class="header__menu-item-link">Features </a>
                    </li>
                    `
                      }
                    
                  </ul>
                </div>
              </li>
      `;
    } else {
      html += `
        <li class="header__menu-item" id="${id}"><a href="${link}" class="header__menu-item-link">${title}</a></li>
      `;
    }
  });
  return html;
};
