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

// News and features subitem
const newsFeaturesEl = document.getElementById("news-features-el");
const newsFeaturesMenuBack = document.getElementById("news-features-back");
const newsFeaturesContainer = document.querySelector(".news-features__menu-container");

newsFeaturesEl.addEventListener("click", () => {
  toggleMenu.classList.add("header__menu-icon-link--hided");
  newsFeaturesContainer.classList.add("news-features__menu-container--opened");
});

newsFeaturesMenuBack.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu.classList.remove("header__menu-icon-link--hided");
  newsFeaturesContainer.classList.remove("news-features__menu-container--opened");
});

// Discover subitem
const discoverEl = document.getElementById("discover-el");
const discoverMenuBack = document.getElementById("discover-back");
const discoverContainer = document.querySelector(".discover__menu-container");

discoverEl.addEventListener("click", () => {
  toggleMenu.classList.add("header__menu-icon-link--hided");
  discoverContainer.classList.add("discover__menu-container--opened");
});

discoverMenuBack.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu.classList.remove("header__menu-icon-link--hided");
  discoverContainer.classList.remove("discover__menu-container--opened");
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

//Render html in submenu on desktop version
const getHTMLSubmenu = (subMenu) => {
  let html = "";
  subMenu.forEach((submenuEL) => {
    html += `
      <div class="submenu-card" id="">
          <figure class="card__image-container">
            <img class="card__image" src="${submenuEL.image}" alt="" />
          </figure>
          <div class="card__inner-wrapper">
            <p class="card__title">${submenuEL.title}</p>
            <figure class="card__decoration-icon-container">
              <img class="card__decoration-icon" src="../images/header/scarcity-icon.svg" alt="" />
            </figure>
          </div>      
      `;
  });
  return html;
};
//TODO: Renderizar el html en cada submenu, crear el nuevo submenu para version desktop y aplicarlo, modificar las condiciones para el anterior  menu en version mobile, ordenar imágenes y código
