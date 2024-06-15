// 4.  Juego de Adivinanzas
// nota: para jugar tienes que abrir el archivo index.html en el navegador

// Función para generar un número aleatorio
const numAleatorio = Math.floor(Math.random() * 10 + 1);
// Cantidad de intentos
let intentos = 3;

// Función para adivinar el número
function adivinaNumero(intentos, numAleatorio) {
  // Pedir numero (prompt) y pasarlo a entero (parseInt)
  let numIngresado = parseInt(prompt("Ingrese un número"));

  // ciclo para adivinar el número
  while (intentos != 0) {
    // Verificar si el número es correcto
    if (numIngresado == numAleatorio) {
      intentos = 0;
      return "¡Felicitaciones! Has adivinado el número.";
    } else if (numIngresado > numAleatorio) {
      console.log("Ingrese un número más bajo");
      numIngresado = parseInt(prompt("Ingrese un número"));
      intentos--;
    } else {
      console.log("Ingrese un número más alto");
      numIngresado = parseInt(prompt("Ingrese un número"));
      intentos--;
    }
  }

  return "¡Haz perdido! El número era " + numAleatorio + ".";
}

console.log(adivinaNumero(intentos, numAleatorio));
