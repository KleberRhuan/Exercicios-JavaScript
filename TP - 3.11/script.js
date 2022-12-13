let userChoice = prompt("Escolha entre Pedra, Papel e Tesoura, e BOA SORTE!");

if (checkChoice(userChoice) === true) {

  let computerChoice = jokenpo();

  let win = "Você escolheu " + userChoice + " e o computador escolheu " + computerChoice +
    " portanto o vencedor é Você";
  let lost = "Você escolheu " + userChoice + " e o computador escolheu " + computerChoice +
    " portanto o vencedor é o Computador";
  let draw = "Você escolheu " + userChoice + " e o computador escolheu " + computerChoice +
    " portanto temos um empate";

  switch (userChoice) {

    case "Pedra":
      if (computerChoice === "Tesoura") {
        alert(win);
      } else if (computerChoice === "Pedra") {
        alert(draw);
      } else {
      alert(lost);
      }
      break;

    case "Tesoura":
      if (computerChoice === "Papel") {
        alert(win);
      } else if (computerChoice === "Tesoura") {
        alert(draw);
      } else{
      alert(lost);
      }
      break;

    case "Papel":
      if (computerChoice === "Pedra") {
        alert(win);
      } else if (computerChoice === "Papel") {
        alert(draw);
      } else {
      alert(lost);
      }
      break;

    default: alert("Opção Inválida");
  }
} else {
  alert("A opção inserida é inválida, Insira novamente, a primeira letra das palavras tem que estar maiuscula.")
  location.reload();
}