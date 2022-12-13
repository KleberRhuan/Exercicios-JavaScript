let role = prompt("Insira o seu Cargo:");
let wage = Number(prompt("Insira o Valor do seu Sálario:"))

if (isNumber(wage) && wage > 0) {
  switch (role) {
    case 'estagiario':
      wage += wage * 0.10;
      alert("Seu novo salario é: " + wage);
      break;

    case 'trainee':
      wage += wage * 0.09;
      alert("Seu novo salario é: " + wage);
      break;

    case 'junior':
      wage += wage * 0.08;
      alert("Seu novo salario é: " + wage);
      break;

    case 'pleno':
      wage += wage * 0.07;
      alert("Seu novo salario é: " + wage);
      break;

    case 'senior':
      wage += wage * 0.06;
      alert("Seu novo salario é: " + wage);
      break;

    default:
      alert("O cargo não é conhecido pelo sistema");
  }
} else{
  alert("Insira um valor de sálario válido");
}