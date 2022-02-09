function insertar(caracter) {
  let pantalla = document.getElementById('output').innerHTML;
  if (caracter == '=') {
    let res = eval(pantalla);
    document.getElementById('output').innerHTML = res;
  } else if (caracter == 'AC') {
    document.getElementById('output').innerHTML = '';
  } else if (caracter == 'C') {
    document.getElementById('output').innerHTML = '';
  } else {
    let numFull = pantalla + caracter;
    document.getElementById('output').innerHTML = numFull;
  }
}
