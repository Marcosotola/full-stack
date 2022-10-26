

/** 
const main = document.querySelector('main');

fetch ('https://hp-api.herokuapp.com/api/characters')
.then (response => response.json())
.then(
    personajes => {
        personajes.forEach(personaje => {
            let infoPersonaje = document.createElement
            ('article');
            infoPersonaje.innerHTML = htmlPersonajes (personaje.name, personaje.image, personaje.house );
            main.appendChild(infoPersonaje);
        });
    }a
)

function htmlPersonajes (personaje, foto, casa){
    let html = `<h2 class="nombre">${personaje}</h2>
    <h3>${casa}</h3>
    <div class="imagen">
        <img src="{foto}" alt="foto ${personaje}"></img>
    </div>`;
}
return html;
*/

const URLSWAPI = "https://swapi.dev/api/vehicles/"
const vehiculos = []


fetch(URLSWAPI)
           .then(respuesta => respuesta.json())
           .then(respuestaEnFormatoJson => console.log(respuestaEnFormatoJson))


