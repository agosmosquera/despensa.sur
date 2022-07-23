console.log("Star Wars API");

const URL = "https://swapi.dev/api/species/"

function render (especies){
    especies.forEach(especie => {document.write(`<li>${especie.name}</li>`) } );
}

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        render(data.results)
    })
    