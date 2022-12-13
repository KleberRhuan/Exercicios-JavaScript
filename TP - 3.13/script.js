let lado1 = Number(prompt("Insira o tamanho do 1 lado do Triângulo:"));
if (isNumber(lado1)) {
  let lado2 = Number(prompt("Insira o tamanho do 2 lado do Triângulo:"));
  if (isNumber(lado2)) {
    let lado3 = Number(prompt("Insira o tamanho do 3 lado do Triângulo:"));
    if (isNumber(lado3)) {
     let isPossible = verificaTriangulo(lado1, lado2, lado3);
      if(isPossible){
        alert("Os Valores Informados podem formar um triângulo");
      } else {
        alert("Os Valores Informados não podem formar um triângulo");
      }
    }
  }
} 




