
/**ction saludo (nombre, apellido, serie) {
    console.log ("hola " +  nombre +  apellido + "tu serie favorita es: " + serie)
}

function name(nomnbre){
    return nombre.length;
}
let nombre = name("marco")
console.log ("tiene" + name)




const suma = (a, b)=> a+b
const resta = (a, b)=> a-b

const iva = x => x * 0.21

let precioproducto = 600
let precioDescuento = 10

let nuevoPrecio = resta (suma(precioProducto, iva(precioproducto)), precioDescuento)
console.log(nuevoPrecio)


//practica

function sumar (a , b){
    return a + b 
}
let result = sumar(parseFloat(prompt("Ingresa un Número")), parseFloat(prompt("Ingresa otro Número")))

console.log(result)



//funcion flecha

const sumar = (a, b) => a + b

let result = sumar(parseFloat(prompt("Ingresa un Número")), parseFloat(prompt("Ingresa otro Número")))

console.log(result)
*/

//Actividad, calcular tiempo de espera

const calcularTiempoPromedio = () =>{
return turnos * tiempoPromedio
}

let tiempoPromedio = 15
let turnos = 0

const sacarTurno = () => {
let nombre = prompt("Ingresar Nombre")
let quiereSacarTurno = prompt("Desea sacar turno")
if(quiereSacarTurno == "si"){
    alert(nombre + "su espera es de" + calcularTiempoPromedio() + "min") 
    turnos++    
}else{
    alert("Hasta Luego")
}
}



