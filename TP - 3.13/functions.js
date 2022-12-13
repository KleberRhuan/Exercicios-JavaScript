function verificaTriangulo(x, y, z) {
  if (x + y > z && z + y > x && x + z > y) {
    return true;
  }
  return false;
}

function isNumber(field){
  let teste = !Number.isNaN(Number.parseFloat(field));
  if(teste == true && field > 0){
    return true;
  } else{
    alert("Por Favor insira um valor válido.")
  return false;
  }
}

