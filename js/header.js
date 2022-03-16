import {
  newsFeaturesSubMenuDataOnDesktop,
  discoverSubMenuDataOnDesktop,
  renderHTMLSubmenu,
} from "./headerSubmenuDesktop.js";
import { headerList, renderHTMLSubmenuOnMobile } from "./headerSubmenuMobile.js";

import htmlRendering from "./render.js";

// Header main rendering

const header = document.getElementById("header");

header.innerHTML += `
  <nav class="header__container">
        <a
          href=""
          class="toggle-menu header__menu-icon-link"
          role="button"
          aria-controls="menu-wrapper"
          aria-label="Open navigation"
          aria-expanded="false"
        >
          <lottie-player class="header__menu-icon" src="./images/header/lottie-menu-icon.json"></lottie-player>
        </a>
        <div class="header__menu-wrapper" id="menu-wrapper">
          <div class="header__menu-inner-wrapper" id="menu-inner-wrapper">
        
            <ul class="header__menu-list" id="header-menu-list"></ul>
          </div>
        </div>
        <a href="" class="header__logo-link">
          <figure class="header__logo-container">
            <img src="./images/header/logo.svg" class="header__logo" alt="" />
          </figure>
          
        </a>
        <button class="header__button-login">login</button>
      </nav>
      <div class="sub-menu__wrapper" id="discover-desktop-wrapper">
        <div class="sub-menu__inner-wrapper">
          <div class="sub-menu__container" id="submenu-container-discover"></div>
          <figure class="sub-menu__bottom-decoration-container">
            <img src="./images/header/submenu-bottom-decoration.svg" alt="" class="sub-menu__bottom-decoration" />
          </figure>
        </div>
      </div>
      
      <div class="sub-menu__wrapper" id="news-features-desktop-wrapper">
        <div class="sub-menu__inner-wrapper">
          <div class="sub-menu__container" id="submenu-container-news-features"></div>
          <figure class="sub-menu__bottom-decoration-container">
            <img
              src="./images/header/submenu-bottom-decoration.svg"
              alt="Decoración de submenu"
              class="sub-menu__bottom-decoration"
            />
          </figure>
        </div>
      </div>
`;

// Render html in submenu on mobile version
const headerMenuListOnMobile = document.getElementById("header-menu-list");

htmlRendering(headerMenuListOnMobile, headerList, renderHTMLSubmenuOnMobile);

//Render html in submenu on desktop version
const submenuContainerDiscover = document.getElementById("submenu-container-discover");
const submenuContainerNewsFeatures = document.getElementById("submenu-container-news-features");

htmlRendering(submenuContainerDiscover, discoverSubMenuDataOnDesktop, renderHTMLSubmenu);

htmlRendering(submenuContainerNewsFeatures, newsFeaturesSubMenuDataOnDesktop, renderHTMLSubmenu);

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
