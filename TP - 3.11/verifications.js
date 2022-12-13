function jokenpo() {

  let choices = [];
  choices[0] = "Pedra";
  choices[1] = "Papel";
  choices[2] = "Tesoura";

  let index = Math.floor(Math.random() * choices.length);
  return choices[index];

}

function checkChoice(valid) {

  if (valid === "Pedra" || valid === "Tesoura" || valid === "Papel") {
    return true;
  }
  return false;
}