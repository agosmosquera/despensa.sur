 
// function render(productos) {
//     const contenedorTienda = document.getElementById('contenedorTienda');
//     const contenedorCarrito = document.getElementById('contenedorCarrito');
//     const carrito = []
    
//     for (const producto of productos) {
    
//       const divProducto = document.createElement('div');
//       const imgProducto = document.createElement('img');
//       const nombreProducto = document.createElement('h2');
//       const marcaProducto = document.createElement('h3');
//       const precioProducto = document.createElement('h3');
//       const botonComprar = document.createElement('button');
    
//       //Les agregamos los estilos asignandoles clases de css
//       divProducto.className = 'card';
//       imgProducto.className = 'card-img-top imagenEscala';
//       nombreProducto.className = 'nombre-producto';
//       marcaProducto.className = 'marca-producto';
//       precioProducto.className = 'card-precio';
//       botonComprar.className = 'btn btn-primary';
    
//       //Le agregamos el contenido a los elementos creados 
//       imgProducto.src = producto.img;
//       nombreProducto.append(producto.tipo + " " + producto.marca);
//       precioProducto.append(`$ ${producto.precio} `);
//       botonComprar.append('Comprar');
//       botonComprar.id = `${producto.id}`;
    
//       botonComprar.onclick = () => {
//         const productoComprado = productos.find(producto => producto.id === botonComprar.id);
//         carrito.push({
//           nombre: productoComprado.marca,
//           nombre: productoComprado.tipo,
//           precio: productoComprado.precio
//         })
//         Swal.fire(
//           'Producto agregado!',
//           'Agregaste ' + productoComprado.tipo + ' ' + productoComprado.marca + ' al carrito!',
//           'success'
//         )
//         // alert("Agregaste " + productoComprado.tipo + " " + productoComprado.marca + " al carrito!")
//       }
    
//       //Agregamos los elementos creados a su elemento contenedor que es divProducto
//       divProducto.append(imgProducto, nombreProducto, precioProducto, botonComprar);
    
//       //Le agregamos al contenedor de la tienda cada uno de los divProducto
//       contenedorTienda.append(divProducto);
    
//     }
    
//     const mostrarCarrito = () => {
//       for (const producto of carrito) {
//         const nombreProducto = `<h4>Producto : ${producto.marca} ${producto.nombre} </h4>`
//         const precioProducto = `<h4>Precio : ${producto.precio}</h4>`
//         contenedorCarrito.innerHTML += nombreProducto
//         contenedorCarrito.innerHTML += precioProducto
//       }
    
//       const total = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
//       contenedorCarrito.append(`Total compra: ${total}`)
//     }
    
//     let botonCarrito = document.getElementById("btnCarrito")
//     botonCarrito.onclick = mostrarCarrito;
    
//     const btnBuscar = document.getElementById("btnBuscar");
//     const inputBuscador = document.getElementById("buscadorInput");
    
//     const buscarProducto = () => {
//       const productoTipo = inputBuscador.value;
//       const resultadoBusqueda = productos.filter(producto => producto.tipo === productoTipo);
//       console.log("Estos son los productos que coinciden con tu busqueda: " + resultadoBusqueda)
//     }
//     btnBuscar.onclick = buscarProducto;
// }

// fetch('http://127.0.0.1:5500/mosqueraAgostina/after/data/productos2.json')
//     .then((response) => response.json())
//     .then((productos) => {
//         render(productos)

//     })