console.log("Fetch a JSON local");

const URL = 'mosqueraAgostina/after/data/products.json/'

function renderProducts (productos) {
  productos.forEach( producto => {
    document.write(`<li>${producto.tipo}</li>`)
  });
}

fetch ( URL )
  .then(response => response.json())
  .then(data => {renderProducts(data)})

