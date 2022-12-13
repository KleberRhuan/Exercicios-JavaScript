function isAnumber(field) {
  if (!Number.isInteger(field)) {
    return false;
  }
  return true;
}

const stepsCoffee = ['1 -Não use água de torneira. Prefira sempre a mineral ou filtrada. Motivo: impurezas, cloro e outras substâncias que podem estar presentes na água são capazes de afetar o sabor e o aroma do café.\n',
'2 – Evite a água fervendo. Esquente a água até começar a borbulhar. Desligue e deixe descansar por 1 minuto. Isso evita que a água entre em contato com o café muito acima da temperatura ideal.\n',
  '3 – Prepare o filtro corretamente. Sempre dobre o filtro seguindo a dupla costura, coloque no suporte e derrame um fio de água para esquentar os objetos do preparo.\n',
  '4 – Respeite a proporção. Para cada 100 ml de água, use, aproximadamente, uma colher de sopa de pó de café.\n',
  '5 - Hidrate o café. Quando for colocar a água pela primeira vez, coloque o suficiente para o café se hidratar e espere 30 segundos antes de acrescentar mais um pouco de água.\n',
  '6 - Não molhe o filtro. Jogue a água em movimentos circulares em cima do pó hidratado e não toque no filtro.\n',
  '7 - Espere toda a água passar pelo filtro. O ar preso entre as partículas de pó levantará algumas bolhas. Ótimo, assim o café será melhor extraído pela água\n',
  '8 - Tenha paciência, mas não demore. Durante o processo de  ‘passagem’ do café, não demore mais do que 5 minutos. A filtragem excessiva torna o café amargo.\n',
  '9 - Não acrescente açúcar. Ao adoçar a bebida, você mascara características naturais dela, como corpo, aroma e acidez.\n',
  '10 - Passe o café no momento em que for tomá-lo. Após 20 minutos no bule ou em uma hora na garrafa térmica, o café oxida. Isso faz com que a bebida perca algumas características sensoriais. Caso precise colocar o café na garrafa térmica, a tática é escaldar o recipiente antes. Derrame água fervente no interior dele e depois o esvazie na pia. Dessa forma, quando você despejar o café, ele ficará quente por mais tempo.\n']

let stepsSelected = parseInt(prompt("Olá, seja muito bem vindo ao passo a passo de como fazer café, digite um valor de 1 a 10 para acompanhar o passo a passo, sendo o 1 o começo e 10 o final."));

if (isAnumber(stepsSelected) === true) {
  switch (stepsSelected) {

    case 1:
      alert(stepsCoffee);
      break;

    case 2:
      alert(stepsCoffee.slice(1));
      break;

    case 3:
      alert(stepsCoffee.slice(2));
      break;

    case 4:
      alert(stepsCoffee.slice(3));
      break;

    case 5:
      alert(stepsCoffee.slice(4));
      break;

    case 6:
      alert(stepsCoffee.slice(5));
      break;

    case 7:
      alert(stepsCoffee.slice(6));
      break;

    case 8:
      alert(stepsCoffee.slice(7));
      break;

    case 9:
      alert(stepsCoffee.slice(8));
      break;

    case 10:
      alert(stepsCoffee.slice(9));
      break;

    default:
      alert("Valor inserido é inválido.");
  }
} else{
 alert("Favor Inserir um Número inteiro com valor de 1-10");
  location.reload();
}