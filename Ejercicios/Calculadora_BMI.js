// 1.  Calculadora de BMI (Índice de Masa Corporal)

function calcularBMI(peso, altura) {
  // Calcula el BMI dividiendo el peso entre el cuadrado de la altura
  const bmi = (peso / (altura * altura)).toFixed(2);

  // Verifica el rango de BMI y muestra el resultado correspondiente
  if (bmi < 18.5) {
    console.log(`Usted se encuentra en un peso bajo su BMI es de ${bmi}`);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`Usted se encuentra en un peso normal su BMI es de ${bmi}`);
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log(`Usted se encuentra en un peso sobre peso su BMI es de ${bmi}`);
  } else {
    console.log(`Usted se encuentra en un peso obeso su BMI es de ${bmi}`);
  }
}

// Ejemplo de uso, calculando el BMI de tres personas
calcularBMI(51, 1.7); // Peso bajo: BMI = 17.65
calcularBMI(80, 1.8); // Peso normal: BMI = 24.69
calcularBMI(100, 1.7); // Peso obeso: BMI = 34.60
