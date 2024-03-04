/* let $title = document.querySelector('h1');

  $title.innerHTML = 'Juego del número secreto'

  let $text = document.querySelector('p');

  $text.innerHTML = 'Ingresa un numero del 1 al maxNumber'
 */
let maximosIntentos = 3;
let intentos = 0;
let secretNumber = 0;
let ListRandomNumber = [];
let maxNumber = 10;

function setTextElement(element, text) {
  let elementHTML = document.querySelector(element);
  elementHTML.innerHTML = text;
}

function generateSecretNumber() {
  let numberGenerate = Math.floor(Math.random() * maxNumber + 1);
  console.log(ListRandomNumber);
  console.log(numberGenerate);
  if (ListRandomNumber.length == maxNumber) {
    setTextElement("p", "Ya se sortearon todo los numeros disponibles");
  } else {
    if (ListRandomNumber.includes(numberGenerate)) {
      return generateSecretNumber();
    } else {
      ListRandomNumber.push(numberGenerate);
      return numberGenerate;
    }
  }
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
  setTextElement("p", `Indica un número del 1 al ${maxNumber}: `);
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
