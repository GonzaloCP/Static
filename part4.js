/*
// ----------- true y false --------------
var x = 4;

if(x){
	document.write("poroto");
}else{
	document.write("pamplo");
} 

console.log(9 == 9); // true
console.log(9 == "9"); // true los comparan en un tipo de valor comun

console.log(9 === 9); // true  OPERADOR DE IGUALDAD
console.log(9 === "9"); // false OPERADOR DE IGUALDAD EXTRICTA

document.write(9 != 6); // true != (distinto a)
document.write(1 != "1"); // false Operador de Desigualdad
document.write(1 !== "1"); // true DESIGUALDAD EXTRICTA

var num = 5;

if (num >= 5 && num <= 10){
	document.write("Este valor esta entre 5 y 10");
}
console.log((num >= 5) && (num <= 10)); //operador AND
console.log((num == 5) || (num <= 10));	//operador OR
console.log(!(num > 5));	              //operador NOT
*/
// if else
/*
var x 

if(!x){
	document.write("x ese " + x)
}

function puntajeDeGolf(par, golpes){
	if(golpes == 1){
  	return "Hole-in-one!";
  }else if(golpes <= par - 2){
  	return "Eagle";
  }else if(golpes == par - 1){
  	return "Birdie";
  }else if(golpes == par){
  	return "Par";
  }else if(golpes == par + 1){
  	return "Bogey";
  }else if(golpes == par + 2){
  	return "Double Bogey";
  }else if(golpes >= par + 3){
  	return "Go Home!";
  }else{
  	return "No se voludo";
  }
}

document.write(puntajeDeGolf(8, 9));

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

document.write(day);
*/


