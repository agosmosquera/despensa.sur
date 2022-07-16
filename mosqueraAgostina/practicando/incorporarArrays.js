let totalCompra = 0;

class Producto {
    constructor(nombre, marca, precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}

const producto1 = new Producto("Arroz", "Mandisovi", 100);
const producto2 = new Producto("Fideos", "San Agustin", 110);
const producto3 = new Producto("Polenta", "Presto Pronta", 140);

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
        const productoSeleccionado = prompt("¿Qué desea comprar? \n1) Arroz\n2) Fideos\n3) Polenta");
        switch(productoSeleccionado){
            case"1":
            case"Arroz":
            case"ARROZ":
            case"arroz":
            alert ("Compraste " + producto1.nombre + " de la marca " + producto1.marca + " por $" + producto1.precio );
            totalCompra = totalCompra + producto1.precio
            break;
            case"2":
            case"Fideos":
            case"FIDEOS":
            case"fideos":
            alert ("Compraste " + producto2.nombre + " de la marca " + producto2.marca + " por $" + producto2.precio );
            totalCompra = totalCompra + producto2.precio
            break;
            case"3":
            case"Polenta":
            case"POLENTA":
            case"polenta":
            alert ("Compraste " + producto3.nombre + " de la marca " + producto3.marca + " por $" + producto3.precio );
            totalCompra = totalCompra + producto3.precio
            break;
            default:
                alert("No seleccionaste ningun producto, gracias por visitarnos.");
                break;
        }
    }
    alert("El total de su compra es: $" + totalCompra);
}

comprarProducto();

const empleados = ["Agostina", "Bianca", "Paula", "Joel"];
console.log("El dia jueves por la mañana trabaja " + empleados[2] + " y el jueves por la tarde " + empleados[0]);
const cervezas = ["Cordoba","Salta Roja","Salta Ipa","Imperial Rubia","Imperial Ipa","Heineken"];
console.log("La cervezas mas vendida el dia viernes 10/06 fue: " + cervezas[3]);
console.log("Los clientes piden que agreguemos la cerveza Miller asi que a partir de mañana la vamos a vender");
cervezas.push("Miller");
console.log("Buenas tardes, las cervezas que tenemos disponibles son las siguientes: " + cervezas);