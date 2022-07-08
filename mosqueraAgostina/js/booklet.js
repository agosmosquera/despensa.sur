// let nombre = "Agostina";
// let apellido = "Mosquera";
// let edad = 22;
// console.log(nombre);
// console.log(apellido);
// console.log(edad);

// const ciudad1 = "Cordoba";
// const ciudad2 = "Carlos Paz";
// const ciudad3 = "Villa Allende";
// const ciudad4 = "San Antonio";
// const ciudad5 = "Toledo";
// console.log(ciudad1);
// console.log(ciudad2);
// console.log(ciudad3);
// console.log(ciudad4);
// console.log(ciudad5);

// let persona = "Agostina Mosquera";
// let domicilio = "Calle 52 Altura 2341";
// let pais = "Argentina";
// let nacimiento = "23-03-2000";
// let codigo = "12345678";
// let carnet = "Codigo: " + codigo + " Persona: " + persona + " Domicilio: " + domicilio + " Pais: " + pais + " Nacimiento: " + nacimiento + ".";
// console.log(carnet);

// let integrante1 = prompt("Ingrese el nombre del primer integrante de su familia");
// let integrante2 = prompt("Ingrese el nombre del segundo integrante de su familia");
// let integrante3 = prompt("Ingrese el nombre del tercer integrante de su familia");
// let integrante4 = prompt("Ingrese el nombre del cuarto integrante de su familia");
// let integrante5 = prompt("Ingrese el nombre del quinto integrante de su familia");
// let familia = "Esta familia consta de los siguientes integrantes: " + "1- " + integrante1 + " " + "2- " + integrante2 + " " + "3- " + integrante3 + " " + "4- " + integrante4 + " "+ "5- " + integrante5;
// console.log(familia);

// let precio = parseFloat(prompt('Ingrese el precio que quiere efectuar el descuento:'));
// let descuento30 = precio - (precio  * 0.3);
// let descuento50 = precio - (precio  * 0.5);
// console.log("El precio final con el descuento del 30% es de: " + descuento30);
// console.log("El precio final con el descuento del 50% es de: " + descuento50);

// clase 2
// let usuario = prompt("Ingrese su nombre");
// let nombre = "Agostina";
// if (usuario == nombre) {
//     console.log("¡Fui yo!");
// } else {
//     console.log("Yo no fui.");
// }
// let decision = prompt("Ingrese una letra, por favor");
// if ((decision == "y") || (decision == "Y")) {
//     console.log("Correcto");
// } else {
//     console.log("Incorrecto");
// }
// let elegir = prompt("Elegí un numero");
// if ((elegir == 1) || (elegir == "uno")) {
//     console.log("ELEGISTE A HOMERO");
// } else if ((elegir == 2) || (elegir == "dos")) {
//     console.log("ELEGISTE A MARGE");
// } else if ((elegir == 3) || (elegir == "tres")) {
//     console.log("ELEGISTE A BART");
// } else if ((elegir == 4) || (elegir == "cuatro")) {
//     console.log("ELEGISTE A LISA");
// } else {
//     console.log("Error, ingrese un numero del 1 al 4 por favor.")
// }
// let dinero = prompt("Ingrese su dinero")
// if ((dinero >= 0) && (dinero <= 1000)) {
//     console.log("Presupuesto bajo");
// } else if ((dinero >= 1001) && (dinero <= 3000)) {
//     console.log("Presupuesto medio");
// } else if (dinero >= 3001) {
//     console.log("Presupuesto alto");
// } else {
//     console.log("Error")
// }
// let producto1 = prompt("Ingrese un producto");
// let producto2 = prompt("Ingrese otro producto");
// let producto3 = prompt("Ingrese otro producto");
// let producto4 = prompt("Ingrese otro producto");
// if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
//     let heladera = "1) " + producto1 + " 2) " + producto2 + " 3) " + producto3 + " 4) " + producto4 ;
//     console.log(heladera)
// } else {
//     console.log("Error, por favor ingrese todos los productos.")
// }
// let nombres = "1 - " + prompt("Ingrese un nombre") + "\n";
// for (let i = 1; i < 5 ; i++) {
//     nombres += " " + (i + 1) + " - " + prompt("Ingrese un nombre") + "\n";
// }
// alert(nombres)

// clase 4
function calculadora(numeroA, numeroB, operacion) {
    switch (operacion) {
        case "+":
            return numeroA + numeroB;
        case "-":
            return numeroA - numeroB;
        case "*":
            return numeroA * numeroB;
        case "/":
            return numeroA / numeroB;
        default:
            return "Esta calculadora no soporta esa operacion";
    }
}
let numeroA = Number(prompt("Ingrese el primer numero por favor"));
let numeroB =  Number(prompt("Ingrese el segundo numero por favor"));
let operacion = prompt("Ingrese la operacion a realizar, numero por favor");
console.log(calculadora(numeroA, numeroB, operacion));