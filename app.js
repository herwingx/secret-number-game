let maximosIntentos = 3;
let intentos = 0;
let secretNumber = 0;
let listRandomNumber = [];
let maxNumber = 10;

function setTextElement(element, text) {
  let elementHTML = document.querySelector(element);
  elementHTML.innerHTML = text;
}

function newGame() {
  let startGame = document.getElementById("start");
  startGame.style.display = "none";
  let restartGame = document.getElementById("restart");
  restartGame.style.display = "none";
  let newGame = document.getElementById("new-game");
  newGame.style.display = "block";
}

function generateSecretNumber() {
  let numberGenerate = Math.floor(Math.random() * maxNumber + 1);
  if (listRandomNumber.length == maxNumber) {
    setTextElement("p", "Ya se sortearon todo los numeros disponibles");
    document.getElementById("user-value").setAttribute("disabled", true)
    newGame();

  // Refrescar cada 5 segundos (5000 milisegundos)
  
  } else {
    if (listRandomNumber.includes(numberGenerate)) {
      return generateSecretNumber();
    } else {
      listRandomNumber.push(numberGenerate);
      return numberGenerate;
    }
  }
}

function checkIntent() {
  let userNumber = parseInt(document.getElementById("user-value").value);
  if (document.getElementById("user-value").value.trim() == "") {
    setTextElement("p", `Porfavor ingresa un numero para continuar`);
  } else {
    if (userNumber == secretNumber) {
      //Acertamos, fue verdadera la condición
      intentos == 1
        ? setTextElement("p", `Lo lograste en ${intentos} intento`)
        : setTextElement("p", `Lo lograste en ${intentos} intentos`);
      document.getElementById("start").setAttribute("disabled", true);
      document.getElementById("restart").removeAttribute("disabled");
    } else {
      userNumber > secretNumber
        ? setTextElement("p", "El numero secreto es menor ")
        : setTextElement("p", "El numero secreto es mayor");
      intentos++;
    }
  }

  if (intentos > maximosIntentos) {
    setTextElement(
      "p",
      `Lo siento llegaste al numero maximo de ${maximosIntentos}`
    );
    document.getElementById("start").setAttribute("disabled", true);
    document.getElementById("restart").removeAttribute("disabled");
  }
  cleanBox();
}

function initialConditions() {
  setTextElement("h1", "Juego del numero secreto");
  setTextElement("p", `Indica un número del 1 al ${maxNumber}: `);
  secretNumber = generateSecretNumber();
  document.getElementById("start").removeAttribute("disabled");
  document.getElementById("restart").setAttribute("disabled", true);
  console.log(secretNumber);
  intentos = 1;
}

function cleanBox() {
  document.getElementById("user-value").value = "";
}

function restartGame() {
  cleanBox();
  initialConditions();
}

initialConditions();
