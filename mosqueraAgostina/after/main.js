function render (productos) {
    productos.forEach(producto => {document.write(` <h4>${producto.tipo}</h4>
    <p>${producto.precio}</p>`) } );
}

fetch('http://127.0.0.1:5500/mosqueraAgostina/after/data/productos2.json')
.then((response)=>response.json())
.then((productos) => {
    render(productos)
    
} )