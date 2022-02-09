let miArreglo = [7, 2, 12, 45, 12, 21];

function Mifuncion(parametroArreglo) {
    for (let i = 0; i < parametroArreglo.length; i++) {
        let textoHtml = document.createElement("p");
        textoHtml.innerHTML = `Este numerito es ${parametroArreglo[i]} y ocupa la posicion ${i} del arreglo`;
        document.getElementById('contenedor').appendChild(textoHtml);
    }
}

Mifuncion(miArreglo);
