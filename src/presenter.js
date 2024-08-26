import isAnioBisiesto from "./anioBisiesto";

const first = document.querySelector("#Anio");
const form = document.querySelector("#anio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  const resultado = isAnioBisiesto(firstNumber) ? "es bisiesto." : "no es bisiesto.";
    div.innerHTML = `<p>El año ${firstNumber} ${resultado}</p>`;
});
