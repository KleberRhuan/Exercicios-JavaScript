function checkNumber(value) {
  if (!Number.isNaN(parseFloat(value))) {
    return true;
  }
  alert("Por favor insira um número.")
  return false;
}

function parcel(y) {

  let quant = prompt("Insira a quantidade de parcelas:");
  if (quant <= 3) {
    let parcelValue = y / quant;
    alert("O valor de cada parcela é " + parcelValue + " e o valor total é " + y);
  } else {
    let parcelValue = (y + (y * 0.04)) / quant;
    alert("O valor de cada parcela é " + parcelValue + " e o valor total é " + y);
  }
}

let value = parseFloat(prompt("Insira o Valor da Compra:"));

if (checkNumber(value) === true) {

  let payment = prompt("Escolha a forma de pagamento,'dinheiro', 'débito', 'crédito', 'A prazo'.");

    let total = 0;

    switch (payment) {

      case 'dinheiro':
        total = value - (value * 0.1);
        alert("O valor total é " + total + ".");
        break;

      case 'débito':
        total = value - (value * 0.08);
        alert("O valor total é " + total + ".");
        break;

      case 'crédito':
        total = value - (value * 0.05);
        alert("O valor total é " + total + ".");
        break;

      case 'A prazo':
        parcel(value);
        break;

      default:
        alert("Escreva uma opção válida.");
    }
  }
