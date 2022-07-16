class ProductoLista {
    constructor(nombre, marca, ) {
        this.nombre = nombre;
        this.marca = marca;
    }
}

let nombreComprador;

document.getElementById("formularioUsuario").addEventListener("submit", manejadorFormularioUsuario);

function manejadorFormularioUsuario(e) {
    e.preventDefault();
    nombreComprador = document.getElementById("user").value;
    let listaDeCompras = document.getElementById("listaDeCompras");
    const listaDeProductos = JSON.parse(localStorage.getItem(nombreComprador));
    listaDeProductos == null ? listaDeCompras.innerHTML = "<h1>No hay productos en tu lista para mostrar</h1>" : mostrarLista(listaDeProductos);
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
            eliminarProductodeLista(productoLista);
        })
        li.appendChild(botonBorrar);
        listaDeCompras.appendChild(li);
    });
}

function mostrarPanel() {
    const opciones = document.getElementById("opciones");

    opciones.innerHTML =
        `<h3>¡Hola ${nombreComprador}!</h3>
      <form id="formulario-usuarioAgregarProducto">
        <input type="text" id="nombre" placeholder="Nombre del producto">
        <input type="text" id="marca" placeholder="Marca del producto">
                <button type="submit">Agregar producto a tu lista</button>
      </form>`;

    document.getElementById("formulario-usuarioAgregarProducto").addEventListener("submit", agregarProductoLista);
}

function agregarProductoLista(event) {
    event.preventDefault();
    const nombreProductoLista = document.getElementById("nombre").value;
    const marcaProductoLista = document.getElementById("marca").value;

    const productodeLista = new ProductoLista(nombreProductoLista, marcaProductoLista);

    const productodeListaEnLocalStorage = JSON.parse(localStorage.getItem(nombreComprador));

    if (productodeListaEnLocalStorage == null) {
        localStorage.setItem(nombreComprador, JSON.stringify([productodeLista]));
        mostrarLista([productodeLista]);
    } else {
        productodeListaEnLocalStorage.push(productodeLista);
        localStorage.setItem(nombreComprador, JSON.stringify(productodeListaEnLocalStorage));
        mostrarLista(productodeListaEnLocalStorage);
    }
    event.target.reset();
}

function eliminarProductodeLista(productodeLista) {
    console.log(productodeLista);
    const productodeListaEnLocalStorage = JSON.parse(localStorage.getItem(nombreComprador));
    const nuevoArray = productodeListaEnLocalStorage.filter(item => item.nombre != productodeLista.nombre);
    localStorage.setItem(nombreComprador, JSON.stringify(nuevoArray));
    Swal.fire({
        icon: 'error',
        title: 'Eliminado!',
        text: 'El producto que seleccionaste, fue eliminado de tu lista',
      })
    mostrarLista(nuevoArray);
}