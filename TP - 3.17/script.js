function year(value) {
  const lenght = Math.ceil(Math.log10(value + 1));

  if (Number.isInteger(value) === true && lenght <= 4 && value >= 0) {
    return true;
  } else {
    alert("Insira um ano válido, deverá conter até 4 caracteres e serem todos númericos")
    return false;
  }
}

function leapYear(value) {
  if (value % 4 === 0) {
    alert("O ano de " + value + " é bissexto");
  } else {
    alert("O ano de " + value + " não é bissexto");
  }
}

let userInput = parseInt(prompt("Insira um ano que te falaremos se ele é bissexto ou não"));

if (year(userInput) === true) {
  leapYear(userInput);
}