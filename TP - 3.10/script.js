
let userInput = prompt("Escolha Par ou Impar");

if (choiceValidation(userInput) === true) {
let randomValue = Math.trunc(Math.floor(Math.random() * 101));

  switch (userInput) {

    case "Par":
      if (isPair(randomValue) === true) {
        alert("Seu número sorteado é " + randomValue + ", parabéns você escolheu corretamente")
      } else {
        alert("Seu número sorteado é " + randomValue + ", Infelizmente você escolheu incorretamente")
      }
      break;

    case "Impar" || "impar":
      if (isPair(randomValue) === true) {
        alert("Seu número sorteado é " + randomValue + ", Infelizmente você escolheu incorretamente")
      } else {
        alert("Seu número sorteado é " + randomValue + ", parabéns você escolheu corretamente")
      }
      break;

    default: alert("Você Não escolheu Nenhuma opção válida.");
  }

} else{
alert("Escolha entre Par ou Impar, 'a primeira letra da palavra tem que estar maiuscula.!'")
  
location.reload();
}