// Agilidade dos pilotos (%)
const slider = ['slider', 75];
const jester = ['jester', 89];
const stinger = ['stinger', 76];
const goose = ['goose', 75];
const iceman = ['iceman', 98];
const maverick = ['maverick', 90];

// Continue daqui.

// inicio das funções
function pilot() {

  let choices = [];
  choices[0] = "slider";
  choices[1] = "jester";
  choices[2] = "stinger";
  choices[3] = "goose";
  choices[4] = "iceman";
  choices[5] = "maverick";

  let index = Math.floor(Math.random() * choices.length);
  return choices[index];

}

function fighterCheck(field) {
  if (field === slider[0] || field === jester[0] || field === stinger[0] || field === goose[0] || field === maverick[0] || field === iceman[0]) {
    return true;
  }
  alert("Favor inserir uma opção válida")
  return false;
}

// final funções

let computerChoice = pilot();

let userFighter = prompt("Escolha seu Piloto: \n 1 - slider \n 2 - jester \n 3 - stinger \n 4 - goose \n 5 - iceman \n 6 - maverick");

if (fighterCheck(userFighter) === true) {

  switch (userFighter) {

    case 'slider':
      userFighter = slider;
      break;

    case 'jester':
      userFighter = jester;
      break;

    case 'stinger':
      userFighter = stinger;
      break;

    case 'goose':
      userFighter = goose;
      break;

    case 'iceman':
      userFighter = iceman;
      break;

    case 'maverick':
      userFighter = maverick;
      break;

    default:
      "Escolha um Piloto Válido."
  }

  switch (computerChoice) {

    case 'slider':
      computerChoice = slider;
      break;

    case 'jester':
      computerChoice = jester;
      break;

    case 'stinger':
      computerChoice = stinger;
      break;

    case 'goose':
      computerChoice = goose;
      break;

    case 'iceman':
      computerChoice = iceman;
      break;

    case 'maverick':
      computerChoice = maverick;
      break;

    default:
      "Erro na escolha do computador"
      
  }
  alert("Sua Escolha  x  Escolha do Computador\n" + userFighter[0] + "  x  " + computerChoice[0] + "\n" + userFighter[1] + "  x  " + computerChoice[1]);

  console.log("Sua Escolha: " + userFighter[0] + " agilidade " + userFighter[1] + "\n" + 
             "Escolha do Computador: " + computerChoice[0] + " agilidade " + computerChoice[1] + "\n");

  if(userFighter[1] > computerChoice[1]){
    console.log("Parabéns você ganhou");
  } else if(userFighter[1] === computerChoice[1]){
    console.log("Oops, parece que houve um empate, tente novamente");
  } else{
  console.log("Que pena, você perdeu.")
  }
}