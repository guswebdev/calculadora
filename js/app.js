const d = document;

const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;

const operar = (operador, n1, n2) => {
  let res;
  switch (operador) {
    case "+":
      res = sumar(n1, n2);
      break;
    case "-":
      res = restar(n1, n2);
      break;
    case "*":
      res = multiplicar(n1, n2);
      break;
    case "/":
      res = dividir(n1, n2);
      break;
  }
  return res;
};

let $arrBotones = [];

d.addEventListener("DOMContentLoaded", (e) => {
  $arrBotones = d.querySelectorAll(`[data-btn]`);
  
  $arrBotones.forEach((el) => {
    el.addEventListener("click", (e) => {
      console.log(e.target.dataset.value)
    })
  })

})

