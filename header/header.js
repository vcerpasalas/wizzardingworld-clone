const toggleMenu = document.querySelector(".toggle-menu");
const lottiePlayer = document.querySelector("lottie-player");
const menuWrapper = document.querySelector("#menu-wrapper");
const menuOpenedClass = menuWrapper.classList;

toggleMenu.addEventListener("click", function (e) {
  e.preventDefault();
  menuWrapper.classList.toggle("header__menu-wrapper--opened");
  if (menuOpenedClass[1] === "header__menu-wrapper--opened") {
    lottiePlayer.getLottie().playSegments([0, 45], true);
  } else {
    lottiePlayer.getLottie().playSegments([30, 0], true);
  }
});
