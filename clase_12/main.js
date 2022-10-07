/** 

let pasos=100
while(pasos>0){
document.write("te faltan",pasos,"pasos por caminar","<br>")
pasos=pasos - 1;
}

//tabla de multiplicar
let ingresarNumero = parseInt(prompt("ingresa numero"))

for (let i = 1; i <=10; i++){
    let resultado = ingresarNumero * i;

    alert (ingresarNumero + " x " + i + "=" +resultado);
}


const listaDeNumeros = [8, 2, 4]

//con for

for(let i = 0; i < listaDeNumeros.length; i++){
    console.log(listaDeNumeros[i])
}


//con for of
for( let elemento of listaDeNumeros){
    console.log(elemento)
}

*/

//Actividad 1

const listaDeNumeros = [8, 2, 4]

const result = listaDeNumeros.map((numero) => {
    if(numero % 2 === 0){
        return nmero + "es par"
    }else{
        return numero + "es impar"
    }
})