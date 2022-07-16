const frutas = document.getElementsByClassName("frutas");
// console.log(frutas[2]);

for (const fruta of frutas) {
    console.log(fruta.innerHTML)
}

const titulo = document.getElementById("titulo")
// titulo.innerText += " con stock:"

// titulo.className = "violeta"

const otroTitulo = document.getElementById("otroTitulo")
otroTitulo.innerText += " con stock:"
otroTitulo.className = "violeta"

const otroTitulo2 = document.getElementById("otroTitulo2")
otroTitulo2.innerText += " con stock:"
otroTitulo2.className = "violeta"

let nuevaFruta = document.createElement("li");
nuevaFruta.innerHTML = "Bananas";
document.getElementById("listaFrutas").append(nuevaFruta);

frutas[1].remove()

document.getElementById("nombre").value = "Paula";
document.getElementById("edad").value = 31;


let verduras = document.getElementById("verduras");
let listaVerduras = ["Papa", "Batata", "Zanahoria", "Cebolla", "Lechuga"];
for (const verdura of listaVerduras) {
    let li = document.createElement("li");
    li.innerHTML = verdura
    verduras.appendChild(li);
};

let producto = {
    id: 1,
    nombre: "Fideos",
    precio: 110,
    marca: "San Agustin"
};
let plantilla = `${producto.nombre} ${producto.marca} -  $${producto.precio}`;

let nuevoProducto = document.createElement("li");
nuevoProducto.innerHTML = plantilla;
document.getElementById("listaProductos").append(nuevoProducto);