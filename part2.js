//---Cadenas---
/*
var miCadena = "ABC";
document.write(miCadena.length);//propiedad

var cadena = 'JavaScript';
document.write(cadena[0] + cadena[1] + cadena[0] + cadena[1]);

// Inmutable (no cambia) mutable (cambia)

var miSustantivo = 'zorro';
var miAdjetivo = 'peludo';
var miVerbo = 'chillo';
var miAdvervio = 'ruidosamente';

var palabrasEnBlanco =
  'El ' +
  miSustantivo +
  ' ' +
  miAdjetivo +
  ' ' +
  miVerbo +
  ' muy ' +
  miAdvervio;
console.log(palabrasEnBlanco);
*/
//------Arreglos-------
/*
var miArreglo = ['Fennekin', 653];
console.log(miArreglo);
console.log(miArreglo[1]);

var zorritos = [
  ['Fennekin', 653],
  ['Braixen', 654],
  ['Delphox', 655],
];
console.log(zorritos);
console.log(zorritos[1]);

zorritos[0] = ['Madafecia', 653];
console.log(zorritos);

var arreglosTridimencional = [[]]; //Arregglo que contendra mulyiples arreglos
console.log(zorritos[0][0]);

zorritos.push(['Vulpix', 37]);
console.log(zorritos);

vulpix = zorritos.pop();
console.log(zorritos);
console.log(vulpix);

madafecia = zorritos.shift();
console.log(zorritos);
console.log(madafecia);

zorritos.unshift(['Fennekin', 653]);
console.log(zorritos);
*/

/*
//------Ejercicio js-------
//------JavaScript-----
let producto = document.getElementById('producto');
let cantidad = document.getElementById('cantidad');
let desecho = document.getElementById('desecho');
let lista = document.getElementById('lista');
let miListaDeCompras = [];

function agregarProducto() {
  let li = document.createElement('li');
  miListaDeCompras.push([producto.value, cantidad.value]);
  li.appendChild(
    document.createTextNode(
      miListaDeCompras[miListaDeCompras.length - 1][0] +
        ': ' +
        miListaDeCompras[miListaDeCompras.length - 1][1]
    )
  );
  lista.appendChild(li);
}
function eliminarProducto() {
  let listado = lista.querySelectorAll("li");
	for( var lis = 0 ; lis < miListaDeCompras.length ; lis++ ){
  	if(desecho.value == miListaDeCompras[lis][0]){
    	miListaDeCompras.splice(lis, 1);
      listado[lis].remove();
    }
  }
}
*/
/* ------HTML-----
    <input id="producto" type="text" placeholder="Ingrese un producto"></input>
    <input id="cantidad" type="number" placeholder="Ingrese la cantidad"></input>
    <button onclick="agregarProducto()" type="submit" >Ingresar a la lista</button>
    <input id="desecho" type="text" placeholder="Ingrese producto a eliminar">
    <button onclick="eliminarProducto()" type="submit" >Eliminar</button>
    <ul id="lista"></ul>
*/
