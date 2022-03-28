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

// Ejecutando tareas asíncronas usando Promesas

let usuarios = [
  {
    id: 1,
    nombre: "Harry Potter",
  },
  {
    id: 2,
    nombre: "Hermione Granger",
  },
  {
    id: 3,
    nombre: "Ron Weasley",
  },
];

let telefonos = [
  {
    id: 1,
    telefono: 970025052,
  },
  {
    id: 2,
    telefono: 995478255,
  },
  {
    id: 3,
    telefono: 953457811,
  },
];

const obtenerUsuario = (id) => {
  return new Promise((result, reject) => {
    if (usuarios.find((usuario) => usuario.id === id)) {
      resolve("El usuario existe");
    } else {
      reject("El usuario no existe");
    }
  });
};
const obtenerTelefono = (id) => {
  return new Promise((result, reject) => {
    if (telefonos.find((telefono) => telefono.id === id)) {
      resolve("El telefono existe");
    } else {
      reject("El telefono no existe");
    }
  });
};

obtenerUsuario(1)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
