function render(productos) {
  const contenedorTienda = document.getElementById('contenedorTienda');
  const contenedorCarrito = document.getElementById('contenedorCarrito');
  const carrito = []

  for (const producto of productos) {

    const divProducto = document.createElement('div');
    const imgProducto = document.createElement('img');
    const nombreProducto = document.createElement('h2');
    const marcaProducto = document.createElement('h3');
    const precioProducto = document.createElement('h3');
    const botonComprar = document.createElement('button');

    //Les agregamos los estilos asignandoles clases de css
    divProducto.className = 'card';
    imgProducto.className = 'card-img-top imagenEscala';
    nombreProducto.className = 'nombre-producto';
    marcaProducto.className = 'marca-producto';
    precioProducto.className = 'card-precio';
    botonComprar.className = 'btn btn-primary';

    //Le agregamos el contenido a los elementos creados 
    imgProducto.src = producto.img;
    nombreProducto.append(producto.tipo + " " + producto.marca);
    precioProducto.append(`$ ${producto.precio} `);
    botonComprar.append('Comprar');
    botonComprar.id = `${producto.id}`;

    botonComprar.onclick = () => {
      const productoComprado = productos.find(producto => producto.id === botonComprar.id);
      carrito.push({
        nombre: productoComprado.marca,
        tipo: productoComprado.tipo,
        precio: productoComprado.precio
      })
      Swal.fire(
        'Producto agregado!',
        'Agregaste ' + productoComprado.tipo + ' ' + productoComprado.marca + ' al carrito!',
        'success'
      )
    }

    //Agregamos los elementos creados a su elemento contenedor que es divProducto
    divProducto.append(imgProducto, nombreProducto, precioProducto, botonComprar);

    //Le agregamos al contenedor de la tienda cada uno de los divProducto
    contenedorTienda.append(divProducto);

  }

  const mostrarCarrito = () => {
    for (const producto of carrito) {
      const nombreProducto = `<li>Producto : ${producto.tipo} ${producto.nombre} </li>`
      const precioProducto = `<h6>Precio : ${producto.precio}</h6>`
      const borrarProducto = document.createElement('button')
      borrarProducto.className = 'btn btn-primary';
      borrarProducto.append('Eliminar');
      borrarProducto.id = `${producto.id}`;
      contenedorCarrito.innerHTML += nombreProducto
      contenedorCarrito.innerHTML += precioProducto
      contenedorCarrito.append(borrarProducto)
    }

    const total = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
    contenedorCarrito.append(`Total compra: ${total}`)

    borrarProducto.onclick = () => {
      const eliminarProductoComprado = productos.find(producto => producto.id === borrarProducto.id);
      carrito.shift({
        nombre: productoComprado.marca,
        tipo: productoComprado.tipo,
        precio: productoComprado.precio
      })
      Swal.fire({
        icon: 'error',
        title: 'Eliminado!',
        text: 'El producto que seleccionaste, fue eliminado de tu lista',
      })
      carrito.append(eliminarProductoComprado)
    }
  }



  let botonCarrito = document.getElementById("btnCarrito")
  botonCarrito.onclick = mostrarCarrito;

  const btnBuscar = document.getElementById("btnBuscar");
  const inputBuscador = document.getElementById("buscadorInput");

  const buscarProducto = () => {
    const productoTipo = inputBuscador.value;
    const resultadoBusqueda = productos.filter(producto => producto.tipo === productoTipo);
    const productoBuscado = productos.filter(producto => producto.id === buscarProducto.id);
    resultadoBusqueda.push({
      nombre: productoBuscado.marca,
      tipo: productoBuscado.tipo,
      precio: productoBuscado.precio
    })
    Swal.fire(
      'Estos son los productos que coinciden con tu busqueda: ',
      `<li>${resultadoBusqueda}</li>`,
      'success');
  }
  btnBuscar.onclick = buscarProducto;


}

fetch('http://127.0.0.1:5500/mosqueraAgostina/after/data/productos2.json')
  .then((response) => response.json())
  .then((productos) => {
    render(productos)

  })