function isAnumber(value) {

  if (!Number.isInteger(value[0]) === false && !Number.isInteger(value[1]) === false) {
    return true;
  } else {
    alert("Insira um valor válido.")
    return false;
  }
}

function percentage(value1, value2) {
  let total = (value1 * 100) / value2;
  return parseInt(total);
}

let validVotes = [parseInt(prompt("Insira a quantidade de votos válidos do mascote RoboRat")),
parseInt(prompt("Insira a quantidade de votos válidos do mascote SuperKeyboard"))];

if (isAnumber(validVotes) === true) {

  let invalidVotes = parseInt(prompt("Insira a quantidade de votos inválidos"));

  if (!Number.isInteger(invalidVotes) === true) {
    alert("Insira um valor válido.");
  } else {

    let totalValidVotes = validVotes[0] + validVotes[1];
    let totalVotes = totalValidVotes + invalidVotes;

    const votesPercentage = [percentage(validVotes[0], totalVotes),
    percentage(validVotes[1], totalVotes),
    percentage(invalidVotes, totalVotes)];

    const validVotesPercentage = [percentage(validVotes[0], totalValidVotes),
    percentage(validVotes[1], totalValidVotes)];

    alert("A Porcentagem do RoboRat é " + votesPercentage[0] + "%\n" +
      "A Porcentagem do SuperKeyboard é " + votesPercentage[1] + "%\n" +
      "A Porcentagem de Votos inválidos é " + votesPercentage[2] + "%");

    alert("A Porcentagem de votos válidos do RoboRat é " + validVotesPercentage[0] + "%\n" +
      "A Porcentagem de votos válidos do SuperKeyboard é " + validVotesPercentage[1] + "%");

    if (validVotesPercentage[0] > validVotesPercentage[1]) {
      alert("O Mascote Vencedor é o RoboRat")
    } else {
      alert("O Mascote Vencedor é o SuperKeyboard")
    }

  }
}

