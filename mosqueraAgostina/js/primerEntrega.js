let totalCompra = 0;

class Producto {
    constructor(id, nombre, marca, precio) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}

class Pedido {
    constructor(producto, cantidad) {
        this.productos = producto;
        this.cantidad = cantidad;
    }
}

const producto1 = new Producto("1", "Arroz", "Mandisovi", 100);
const producto2 = new Producto("2", "Fideos", "San Agustin", 110);
const producto3 = new Producto("3", "Polenta", "Presto Pronta", 140);

const productos = [producto1, producto2, producto3];
const carrito = []

function agregarProductoAlCarrito(id) {
    const productoEncontrado = productos.find(producto => producto.id == id);
    if (productoEncontrado == undefined) {
        alert("No encontre el producto que seleccionaste.");
    } else {
        const cantidad = prompt("Perfecto, ingrese la cantidad de " + productoEncontrado.nombre)
        const nuevoPedido = new Pedido(productoEncontrado, cantidad)
        carrito.push(nuevoPedido);
    }
}

function mostrarCarritoActual() {
    console.log("Los productos que agregó fueron: " + carrito.join(", "));
    alert("El total de su compra es: $" + totalCompra);
    
}

function mostrarProductosYSeleccionar() {
    let menuAMostrar = "¿Que producto desea comprar? Por favor ingrese el numero del producto.\n";
    productos.forEach(producto => {
        menuAMostrar += producto.id + ") " + producto.nombre + " $" + producto.precio + "\n";
    })
    let respuesta = prompt(menuAMostrar);
    return respuesta;
    
}

function confirmarCompra() {
    const respuesta = prompt("¿Desea comprar algo? Marque el numero de su respuesta\n1) Si \n2) No");
    if (respuesta == 1 || respuesta == "si" || respuesta == "Si" || respuesta == "SI") {
        return true;
    } else {
        return false;
    }
}


function comprarProducto() {
    while (confirmarCompra()) {
        let productoSeleccionado = mostrarProductosYSeleccionar();
        agregarProductoAlCarrito(productoSeleccionado);
        mostrarCarritoActual();
    }
}

comprarProducto();


const empleados = ["Agostina", "Bianca", "Paula", "Joel"];
console.log("El dia jueves por la mañana trabaja " + empleados[2] + " y el jueves por la tarde " + empleados[0]);
const cervezas = ["Cordoba", "Salta Roja", "Salta Ipa", "Imperial Rubia", "Imperial Ipa", "Heineken"];
console.log("La cervezas mas vendida el dia viernes 10/06 fue: " + cervezas[3]);
console.log("Los clientes piden que agreguemos la cerveza Miller asi que a partir de mañana la vamos a vender");
cervezas.push("Miller");
console.log("Buenas tardes, las cervezas que tenemos disponibles son las siguientes: " + cervezas);