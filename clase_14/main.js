// trabajo practico 14

const productos = [
    {name: "Celeron",
    modelo: "j192",
    precio: 4000,
},
    {
        name: "Pentium",
        modelo: "x4",
        precio: 10000,
    },
    {
name: "I5",
modelo: "10000 gen",
precio: 50000,
    },
]

const contenedorDeProductosHTML = document.getElementById("contenedorDeProductos")
let nombreModelo = "pentium"
let plantilla =  `<div class="carta">
<h2>${productos[0].name}</h2>
<p>modelo: ${productos[0].modelo}</p>
<p>precio: ${productos[0].precio}</p>
</div>`
let plantilla2 =  `<div class="carta">
<h2>${productos[1].name}</h2>
<p>modelo: ${productos[1].modelo}</p>
<p>precio: ${productos[1].precio}</p>
</div>`



//contenedorDeProductosHTML.innerHTML += plantilla2


const crearPlantilla = (producto) => {
    return `<div class="carta">
    <h2>${producto.name}</h2>
    <p>modelo: ${producto.modelo}</p>
    <p>precio: ${producto.precio}</p>
    </div>`
}
for( let producto of productos ){
    contenedorDeProductosHTML.innerHTML += crearPlantilla(producto)
}