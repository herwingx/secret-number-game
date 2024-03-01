/* let $title = document.querySelector('h1');

  $title.innerHTML = 'Juego del número secreto'

  let $text = document.querySelector('p');

  $text.innerHTML = 'Ingresa un numero del 1 al 10'
 */

  function setTextElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
  }

  