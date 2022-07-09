class Pelicula {
    constructor(titulo, duracion, director, linkTrailer) {
      this.titulo = titulo;
      this.duracion = duracion;
      this.director = director;
      this.linkTrailer = linkTrailer;
    }
  }
  
  let nombreComprador;
  
  document.getElementById("formulario-usuario").addEventListener("submit", manejadorFormularioUsuario);
  
  function manejadorFormularioUsuario(e) {
    e.preventDefault();
    nombreComprador = document.getElementById("user").value;
    let listadodePeliculas = document.getElementById("listadodePeliculas");
    const peliculas = JSON.parse(localStorage.getItem(nombreComprador));
  
    if (peliculas == null) {
      listadodePeliculas.innerHTML = "<h1>No hay peliculas para mostrar</h1>"
    } else {
      mostrarLista(peliculas);
    }
    mostrarPanel();
  }
  
  function mostrarLista(peliculas) {
    let listadodePeliculas = document.getElementById("listadodePeliculas");
    listadodePeliculas.innerHTML = "";
    //  [{el señor de los anillos},{matrix}]
    peliculas.forEach(pelicula => {
      let li = document.createElement("li");
      li.innerHTML = `
      <hr> ${pelicula.titulo.toUpperCase()} - ${pelicula.duracion} minutos - ${pelicula.director} - <a href="${pelicula.linkTrailer}" target="blank"> Ver trailer </a>`;
      const botonBorrar = document.createElement("button");
      botonBorrar.innerText = "Borrar";
      botonBorrar.addEventListener("click", () => {
        eliminarPelicula(pelicula);
      })
      li.appendChild(botonBorrar);
      listadodePeliculas.appendChild(li);
    });
  }
  
  function mostrarPanel() {
    const opciones = document.getElementById("opciones");
  
    opciones.innerHTML =
      `<h3>Bienvenido ${nombreComprador}</h3>
      <form id="formulario-pelicula">
        <input type="text" id="titulo" placeholder="Titulo">
        <input type="number" id="duracion" placeholder="Duracion">
        <input type="text" id="director" placeholder="Director">
        <input type="text" id="linkTrailer" placeholder="Link trailer">
        <button type="submit">Agregar pelicula</button>
      </form>`;
  
    document.getElementById("formulario-pelicula").addEventListener("submit", agregarPelicula);
  }
  
  function agregarPelicula(e) {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const duracion = document.getElementById("duracion").value;
    const director = document.getElementById("director").value;
    const linkTrailer = document.getElementById("linkTrailer").value;
  
    const pelicula = new Pelicula(titulo, duracion, director, linkTrailer);
  
    const peliculasEnLocalStorage = JSON.parse(localStorage.getItem(nombreComprador));
  
    if (peliculasEnLocalStorage == null) {
      localStorage.setItem(nombreComprador, JSON.stringify([pelicula]));
      mostrarLista([pelicula]);
    } else {
      peliculasEnLocalStorage.push(pelicula);
      localStorage.setItem(nombreComprador, JSON.stringify(peliculasEnLocalStorage));
      mostrarLista(peliculasEnLocalStorage);
    }
    e.target.reset();
  }
  
  function eliminarPelicula(pelicula) {
    console.log(pelicula);
    const peliculasEnLocalStorage = JSON.parse(localStorage.getItem(nombreComprador));
    const nuevoArray = peliculasEnLocalStorage.filter(item => item.titulo != pelicula.titulo);
    localStorage.setItem(nombreComprador, JSON.stringify(nuevoArray));
    mostrarLista(nuevoArray);
  }