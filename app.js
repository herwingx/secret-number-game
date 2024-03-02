/* let $title = document.querySelector('h1');

  $title.innerHTML = 'Juego del número secreto'

  let $text = document.querySelector('p');

  $text.innerHTML = 'Ingresa un numero del 1 al 10'
 */
let maximosIntentos = 3;
let intentos = 0;
let secretNumber = 0;


function setTextElement(element, text) {
  let elementHTML = document.querySelector(element);
  elementHTML.innerHTML = text;
}

function generateSecretNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

function checkIntent() {
  let userNumber = parseInt(document.getElementById("user-value").value);
  if (userNumber == secretNumber) {
    //Acertamos, fue verdadera la condición
    setTextElement("p", `Acertaste, el número es: ${userNumber}`);
    document.getElementById("restart").removeAttribute("disabled");
    intentos == 1
      ? setTextElement("p", `Lo lograste en ${intentos} intento`)
      : setTextElement("p", `Lo lograste en ${intentos} intentos`);
  } else {
    userNumber > secretNumber
      ? setTextElement("p", "El numero secreto es menor ")
      : setTextElement("p", "El numero secreto es mayor");
    intentos++;
  }

  if (intentos > maximosIntentos) {
    setTextElement(
      "p",
      `Lo siento llegaste al numero maximo de ${maximosIntentos}`
    );
  }
  cleanBox();
}

function initialConditions() {
  setTextElement("h1", "Juego del numero secreto");
  setTextElement("p", "Indica un número del 1 al 10: ");
  secretNumber = generateSecretNumber();
  intentos = 1;
}

function cleanBox() {
  document.getElementById("user-value").value = "";
}

function restartGame() {
  cleanBox();
  initialConditions();
  document.getElementById("restart").setAttribute("disabled", true);
}

initialConditions();
console.log(secretNumber);