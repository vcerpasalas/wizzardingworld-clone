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
