const hoje = new Date();
const diaAtual = hoje.getUTCDate();
const mesAtual = hoje.getMonth();

// Continue daqui

// Ola Professor ou Monitor, como fizemos está tarefa em sala decidi dar uma diferenciada, segue trabalho, insira a data de seu aniversario e após isso clicke fora.

function bdayCalcule() {
  let birthday = new Date(document.getElementById("birthday").value); 
  let ageCalc = hoje.getFullYear() - birthday.getFullYear();

  let comingBday = new Date(hoje.getFullYear(), birthday.getMonth(), birthday.getDate());

  if (hoje > comingBday) {
    comingBday.setFullYear(hoje.getFullYear() + 1);
  }

  let milliSec = 86400000;

  let daysCalc = Math.ceil((comingBday.getTime() - hoje.getTime()) / (milliSec));

  if (daysCalc && ageCalc < 150) {
    document.getElementById("dayOfB").innerText = `Em ${daysCalc} dias você irá completar ${ageCalc + 1} ano(s) de idade`;
  } else {
    document.getElementById("dayOfB").innerText = "Insira Uma idade válida";
  }
}