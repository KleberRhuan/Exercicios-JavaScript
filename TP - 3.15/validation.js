function isNumber(field){
  let teste = !Number.isNaN(Number.parseFloat(field));
  if(teste == true){
    return true;
  } else{
    alert("Por Favor insira um valor válido.")
  return false;
  }
}
