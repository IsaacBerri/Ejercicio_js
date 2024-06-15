// 14. Verificador de contraseñas

// Funcion de verificador de contraseñas
const validador = (password) => {
  // Arreglo para almacenar los errores
  let errors = [];

  // Validaciones
  // Longitud minima de 8
  if (password.length < 8) {
    errors.push("La contraseña tiene que tener minimo 8 caracteres");
  }
  // Al menos una letra minuscula
  if (!/[a-z]/.test(password)) {
    errors.push("La contraseña debe contener una letra minuscula");
  }
  // Al menos una letra mayuscula
  if (!/[A-Z]/.test(password)) {
    errors.push("La contraseña debe contener una letra mayuscula");
  }
  // Al menos un numero
  if (!/[0-9]/.test(password)) {
    errors.push("La contraseña debe contener un numero");
  }

  // Validar si hay errores, en caso de que si, mostrarlos con un ciclo interno (forEach)
  if (errors.length == 0) {
    console.log("Contraseña valida");
  } else {
    errors.forEach((error) => {
      console.log(error);
    });
  }
};

const password1 = "holA1dasdadad";
validador(password1);
