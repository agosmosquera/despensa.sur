let usuario = prompt("Te damos la bienvenida a Almacen Punto Sur, ingresá tu nombre");
let edad = prompt(usuario + " ingresá tu edad");

if ((edad >= 18) && (edad != "")) {
    prompt("Hola " + usuario + "! Podes ingresar al almacen y comprar bebidas alcoholicas.");
} else if ((edad < 18) && (edad != "")) {
    prompt("Hola " + usuario + " Lo lamento, no podes comprar bebidas alcoholicas pero podes ingresar al almacen igualmente.");
} else {
    prompt("Por favor, ingresa tu edad para continuar");
};

// let compra1 = prompt("¿Que desea comprar?")
// if (compra1 != "") {
//     prompt("Perfecto, " + compra1 + " ha sido añadido a sus compras")
// } else {
//     prompt("Por favor, se le solicita comprar algo o retirarse del local, muchas gracias")
// }
// let compra2 = prompt("¿Que desea comprar?")
// if (compra2 != "") {
//     prompt("Perfecto, " + compra2 + " ha sido añadido a sus compras.")
// } else {
//     prompt("Por favor, se le solicita comprar algo o retirarse del local, muchas gracias")
// }

const arroz = {precio: 100 , marca: "Mandisovi", vendido: true}

console.log("El arroz que tenemos es de la marca " + arroz.marca + " y cuesta $" + arroz.precio );

const fideos = {precio: 110 , marca: "Di Pascuale", vendido: false}

console.log("Los fideos que tenemos son de la marca " + fideos.marca + " y cuestan $" + fideos.precio );



class Compra{
   
	constructor(pedido){
		this.compras;
		this.mandarinas = pedido.mandarinas
		this.papas = pedido.papas
		this.zanahorias = pedido.zanahorias
		this.peras = pedido.peras;
	}


	entregarCompra(){

		if(this.mandarinas.toUpperCase() == "SI"){
			
			this.mandarinas = "medio kilo de mandarinas"

		}else{
			
			this.mandarinas = "ninguna mandarina"
		}


		if(this.papas != "" && this.zanahorias != "" && this.peras){
			this.papas = "1 kilo de papas"
            this.zanahorias = "medio kilo de zanahorias"
            this.peras = "2 peras."
			return "Aqui tiene su pedido: " + this.mandarinas + ", " + this.papas + ", " + this.zanahorias + " y " + this.peras 
		
		}else if (this.mandarinas.toUpperCase() == "NO" && this.papas.toUpperCase() == "NO" && this.zanahorias.toUpperCase() == "NO" && this.peras.toUpperCase() == "NO") {
            this.papas = "1 kilo de papas"
            this.zanahorias = "medio kilo de zanahorias"
            this.peras = "2 peras."
			return "Aqui tiene su pedido: " +  this.papas + ", " + this.zanahorias + " y " + this.peras
		
		}else{

			return "Por favor, se le solicita comprar algo o retirarse del local, muchas gracias"

		}
		
	}

	
}

let compra = new Compra({mandarinas:"",papas:"",zanahorias:"",peras:""})
compra["mandarinas"] = prompt("¿Quiere mandarinas?")
compra.papas = prompt("¿Quiere papas?")
compra.zanahorias = prompt("¿Quiere zanahorias?")
compra.peras = prompt("¿Quiere peras?")


console.log(compra.entregarCompra())

