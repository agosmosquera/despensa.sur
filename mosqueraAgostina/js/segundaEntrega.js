class ProductoLista {
    constructor(nombre, marca, ) {
        this.nombre = nombre;
        this.marca = marca;
    }
}

let nombreComprador;

document.getElementById("formulario-usuario").addEventListener("submit", manejadorFormularioUsuario);

function manejadorFormularioUsuario(e) {
    e.preventDefault();
    nombreComprador = document.getElementById("user").value;
    let listaDeCompras = document.getElementById("listaDeCompras");
    const listaDeProductos = JSON.parse(localStorage.getItem(nombreComprador));
    if (listaDeProductos == null) {
        listaDeCompras.innerHTML = "<h1>No hay productos en tu lista para mostrar</h1>"
    } else {
        mostrarLista(listaDeProductos);
    }
    mostrarPanel();
}

function mostrarLista(listaDeProductos) {
    let listaDeCompras = document.getElementById("listaDeCompras");
    listaDeCompras.innerHTML = "";
    listaDeProductos.forEach(productoLista => {
        let li = document.createElement("li");
        li.innerHTML = `
      <hr> ${productoLista.nombre.toUpperCase()} - ${productoLista.marca}`;
        const botonBorrar = document.createElement("button");
        botonBorrar.innerText = "Borrar";
        botonBorrar.addEventListener("click", () => {
            eliminarProductoLista(productoLista);
        })
        li.appendChild(botonBorrar);
        listaDeCompras.appendChild(li);
    });
}

function mostrarPanel() {
    const opciones = document.getElementById("opciones");

    opciones.innerHTML =
        `<h3>¡Hola ${nombreComprador}!</h3>
      <form id="formulario-usuario">
        <input type="text" id="nombre" placeholder="Nombre del producto">
        <input type="text" id="marca" placeholder="Marca del producto">
                <button type="submit">Agregar producto a tu lista</button>
      </form>`;

    document.getElementById("formulario-usuario").addEventListener("submit", agregarProductoLista);
}

function agregarProductoLista(e) {
    e.preventDefault();
    const nombreProductoLista = document.getElementById("nombre").value;
    const marcaProductoLista = document.getElementById("marca").value;

    const productodeLista = new ProductoLista(nombre, marca);

    const productodeListaEnLocalStorage = JSON.parse(localStorage.getItem(nombreComprador));

    if (productodeListaEnLocalStorage == null) {
        localStorage.setItem(nombreComprador, JSON.stringify([productodeLista]));
        mostrarLista([productodeLista]);
    } else {
        productodeListaEnLocalStorage.push(productodeLista);
        localStorage.setItem(nombreComprador, JSON.stringify(productodeListaEnLocalStorage));
        mostrarLista(productodeListaEnLocalStorage);
    }
    e.target.reset();
}

function eliminarProductodeLista(productodeLista) {
    console.log(productodeLista);
    const productodeListaEnLocalStorage = JSON.parse(localStorage.getItem(nombreComprador));
    const nuevoArray = productodeListaEnLocalStorage.filter(item => item.nombre != pelicula.nombre);
    localStorage.setItem(nombreComprador, JSON.stringify(nuevoArray));
    mostrarLista(nuevoArray);
}