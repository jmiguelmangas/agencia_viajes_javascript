import { barcelona, roma, paris, londres } from "./ciudades.js";

//obtener los elementos del DOM (Document Object Model)

let enlaces = document.querySelectorAll("a"); //selecciona todos los elementos del tipo a
let tituloElemento = document.getElementById("titulo");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");
let imagenElemento = document.getElementById("imagen");
let tituloElementoImagen = document.getElementById("tituloimagen");
//agregar elemento click a cada enlace
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    //remover activo recorriendo los 4
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });
    //agregar active al que corresponda
    this.classList.add("active");
    //traer info del objeto correspondiente a la lecccion
    let contenido = obtenerContenido(this.textContent);
    //mostrar el contenido en el dom
    tituloElemento.innerHTML = contenido.titulo;
    subTituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = `Precio: ${contenido.precio} Euros`;
    imagenElemento.setAttribute("src", contenido.imagen);
    tituloElementoImagen.innerHTML = contenido.ciudad;
  });
});

//funcion para traer la info correcta desde ciudades

function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
