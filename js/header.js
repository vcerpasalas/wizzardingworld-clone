// Menu icon lottie animation
const toggleMenu = document.querySelector(".toggle-menu");
const lottiePlayer = document.querySelector("lottie-player");
const menuWrapper = document.querySelector("#menu-wrapper");
const menuOpenedClass = menuWrapper.classList;

toggleMenu.addEventListener("click", (e) => {
  e.preventDefault();
  menuWrapper.classList.toggle("header__menu-wrapper--opened");
  if (menuOpenedClass[1]) {
    lottiePlayer.getLottie().playSegments([0, 45], true);
  } else {
    lottiePlayer.getLottie().playSegments([30, 0], true);
  }
});

// News and features and discover subitem
const newsFeaturesEl = document.getElementById("news-features-el");
const newsFeaturesMenuBack = document.getElementById("news-features-back");
const newsFeaturesContainer = document.querySelector(".news-features__menu-container");

const newsFeaturesDesktopWrapper = document.getElementById("news-features-desktop-wrapper");
const discoverDesktopWrapper = document.getElementById("discover-desktop-wrapper");

const submenuArrowNewsFeatures = document.getElementById("submenu-arrow-icon-news-features");
const submenuArrowDiscover = document.getElementById("submenu-arrow-icon-discover");

const handleNewsFeaturesDesktopClick = () => {
  newsFeaturesDesktopWrapper.classList.toggle("sub-menu__wrapper--opened");
  discoverDesktopWrapper.classList.remove("sub-menu__wrapper--opened");

  submenuArrowNewsFeatures.classList.toggle("header__submenu-arrow-icon--clicked");
  submenuArrowDiscover.classList.remove("header__submenu-arrow-icon--clicked");

  discoverEl.classList.remove("header__menu-item-text-arrow--active");
  newsFeaturesEl.classList.toggle("header__menu-item-text-arrow--active");
};

newsFeaturesEl.addEventListener("click", () => {
  if (window.innerWidth < 1024) {
    toggleMenu.classList.add("header__menu-icon-link--hided");
    newsFeaturesContainer.classList.add("news-features__menu-container--opened");
  }
  handleNewsFeaturesDesktopClick();
});

newsFeaturesMenuBack.addEventListener("click", (e) => {
  if (window.innerWidth < 1024) {
    e.stopPropagation();
    toggleMenu.classList.remove("header__menu-icon-link--hided");
    newsFeaturesContainer.classList.remove("news-features__menu-container--opened");
  }
});

// Discover subitem
const discoverEl = document.getElementById("discover-el");
const discoverMenuBack = document.getElementById("discover-back");
const discoverContainer = document.querySelector(".discover__menu-container");

const handleDiscoverDesktopClick = () => {
  discoverDesktopWrapper.classList.toggle("sub-menu__wrapper--opened");
  newsFeaturesDesktopWrapper.classList.remove("sub-menu__wrapper--opened");

  submenuArrowDiscover.classList.toggle("header__submenu-arrow-icon--clicked");
  submenuArrowNewsFeatures.classList.remove("header__submenu-arrow-icon--clicked");

  newsFeaturesEl.classList.remove("header__menu-item-text-arrow--active");
  discoverEl.classList.toggle("header__menu-item-text-arrow--active");
};

discoverEl.addEventListener("click", () => {
  if (window.innerWidth < 1024) {
    toggleMenu.classList.add("header__menu-icon-link--hided");
    discoverContainer.classList.add("discover__menu-container--opened");
  }
  handleDiscoverDesktopClick();
});

discoverMenuBack.addEventListener("click", (e) => {
  if (window.innerWidth < 1024) {
    e.stopPropagation();
    toggleMenu.classList.remove("header__menu-icon-link--hided");
    discoverContainer.classList.remove("discover__menu-container--opened");
  }
});

// Dynamic color on scroll to menu inner wrapper
const menuInnerWrapper = document.getElementById("menu-inner-wrapper");
const headerNavEl = document.querySelector(".header__container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0 && window.innerWidth >= 1024) {
    menuInnerWrapper.classList.add("header__menu-wrapper--scroll");
    headerNavEl.classList.add("header__container--scroll");
  } else {
    menuInnerWrapper.classList.remove("header__menu-wrapper--scroll");
    headerNavEl.classList.remove("header__container--scroll");
  }
});

// header on hover
const header = document.getElementById("header");

header.addEventListener("mouseenter", () => {
  if (window.scrollY === 0 && window.innerWidth >= 1024) {
    menuInnerWrapper.classList.add("header__menu-wrapper--scroll");
    headerNavEl.classList.add("header__container--scroll");
  }
});
header.addEventListener("mouseleave", () => {
  if (window.scrollY === 0 && window.innerWidth >= 1024) {
    menuInnerWrapper.classList.remove("header__menu-wrapper--scroll");
    headerNavEl.classList.remove("header__container--scroll");
  }
});

const discoverSubMenuData = [
  { id: 1, title: "books", image: "./images/header/book.png" },
  { id: 2, title: "films", image: "./images/header/films.webp" },
  { id: 3, title: "portkey games", image: "./images/header/portkey-games.png" },
  { id: 4, title: "on stage", image: "./images/header/on-stage.png" },
  { id: 5, title: "experiences", image: "./images/header/experiences.webp" },
];
const newsFeaturesSubMenuData = [
  { id: 10, title: "news", image: "./images/header/news.webp" },
  { id: 11, title: "features", image: "./images/header/features.png" },
];

//Render html in submenu on desktop version
const renderHTMLSubmenu = (subMenu) => {
  let html = "";
  subMenu.forEach((submenuEL) => {
    const { id, image, title } = submenuEL;
    html += `
      <div class="submenu-card" id="${id}">
          <figure class="card__image-container">
            <img class="card__image" src="${image}" alt="" />
          </figure>
          <div class="card__inner-wrapper">
            <p class="card__title">${title}</p>
            <figure class="card__decoration-icon-container">
              <img class="card__decoration-icon" src="./images/header/scarcity-icon.svg" alt="" />
            </figure>
          </div>      
          </div>      
      `;
  });
  return html;
};

const submenuContainerDiscover = document.getElementById("submenu-container-discover");
let discoverSubmenuHtml = renderHTMLSubmenu(discoverSubMenuData);
submenuContainerDiscover.innerHTML = discoverSubmenuHtml;

const submenuContainerNewsFeatures = document.getElementById("submenu-container-news-features");
let newsFeaturesSubmenuHtml = renderHTMLSubmenu(newsFeaturesSubMenuData);
submenuContainerNewsFeatures.innerHTML = newsFeaturesSubmenuHtml;

// Reset menu on some elements
const resetMenuScreen = () => {
  newsFeaturesDesktopWrapper.classList.remove("sub-menu__wrapper--opened");
  discoverDesktopWrapper.classList.remove("sub-menu__wrapper--opened");
  submenuArrowNewsFeatures.classList.remove("header__submenu-arrow-icon--clicked");
  submenuArrowDiscover.classList.remove("header__submenu-arrow-icon--clicked");
  discoverEl.classList.remove("header__menu-item-text-arrow--active");
  newsFeaturesEl.classList.remove("header__menu-item-text-arrow--active");
};

window.addEventListener("mouseover", (e) => {
  const subMenuWrapper = "sub-menu__wrapper sub-menu__wrapper--opened";
  const headerOnScroll = "header__container header__container--scroll";
  const value = e.target.classList.value;

  if (subMenuWrapper === value || headerOnScroll === value || value === "") {
    resetMenuScreen();
  }
});

document.addEventListener("mouseleave", (event) => {
  if (
    event.clientY <= 0 ||
    event.clientX <= 0 ||
    event.clientX >= window.innerWidth ||
    event.clientY >= window.innerHeight
  )
    resetMenuScreen();
});
