window.onload = function () {
  var opcionEscogida = "";
  var opcionElegida = "Jugar";
  localStorage.setItem("Puntaje", 0);
  const btn = document.getElementById("quiz-game__button-game");
  btn.addEventListener("click", () => {
    opcionEscogida = document.querySelector('input[name="question__text"]:checked');

    if (!opcionEscogida) {
      alert("Por favor marca una respuesta");
      return false;
    } else if (opcionEscogida.value == opcionElegida) {
    }
  });
};

document.addEventListener("DOMContentLoaded", documentReady);
