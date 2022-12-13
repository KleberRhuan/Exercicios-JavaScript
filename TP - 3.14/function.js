function verificaTriangulo(x, y, z) {
  if (x + y > z && z + y > x && x + z > y) {
    return true;
  }
  return false;
}

function isNumber(field){
  let teste = !Number.isNaN(Number.parseFloat(field));
  if(teste == true){
    return true;
  } else{
    alert("Por Favor insira um valor válido.")
  return false;
  }
}

function classification(x, y, z){
  if(x != y && y != z && z != x){
    alert("Seu triângulo é escaleno");
  } else if(x == y && y == z && z == x){
    alert("Seu triângulo é equilátero");
  } else {
    alert("Seu triângulo é isósceles");
  }
}