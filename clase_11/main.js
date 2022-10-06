
/** 
let grupo = [`grupo1`, `grupo2`, `grupo3`, `grupo4`, `grupo5`];

console.log(grupo.length)
console.log(grupo [0])

let lista = [`harina`, `papas`, `manzanas`, `jugo`, `chocolate`];

let articulo = prompt(`que articulo desea agregar a la lista`);

if (lista.includes(articulo)){
    alert (articulo + ` ya esta en la lista`);
}else{
    lista.push(articulo)
    alert(`la lista es:` +lista)
}

let color = prompt("ingresa un color");

switch (color) {
    case "rosa":
        alert("es Kimberly");
        break;
    case "amarillo":
        alert("es Trini");
        break;
    case "azul":
        alert("es Billy");
        break;
    default:
        alert("no es un power rangers")
}


console.log(new Date().getDay());

let numeroDia = new Date().getDay();

switch (numeroDia) {
    case 0:
        alert("Domingo");
        break;
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
        case 3:
        alert("Miercoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
        case 6:
            alert("Sabado");
            break;
    default: 
    alert("no es un dia");

}


let numero =parseFloat(prompt("Ingresa un numero"))

let esMayorADiez = numero > 10
let esMenorOIgualADiez = numero <= 10

if(esMayorADiez){
document.write("el numero es mayor a 10")
}else if(esMenorOIgualADiez){
    document.write("el numero es menor o igual a 10")
}else{
    document.write("no es un numero")
}



let numero =parseFloat(prompt("Ingresa un numero"))

if(numero > 1000){
    alert("es mayor a 1000")
}else{
    alert("es menor a 1000")
}
*/


numero > 1000 ? alert("es mayor a 1000"): alert("es menor que 1000")