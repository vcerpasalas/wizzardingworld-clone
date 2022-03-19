const operación = {
  suma: (x, y) => {
    x + y;
  },
  resta: (x, y) => {
    x - y;
  },
  multiplicación: (x, y) => {
    x * y;
  },
  división: (x, y) => {
    x / y;
  },
};

const num1 = 2;
const num2 = 4;
const op = "resta";
const calculate = (x, y, operacion) => {};

let resultado = operación[op];

if (resultado) {
  let res = resultado(num1, num2);
  console.log(res);
}
