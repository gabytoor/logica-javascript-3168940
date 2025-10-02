const titulo = document.querySelector (".titulo")
const imgPrin = document.querySelector (".imgPrin")
const problemas = document.querySelector (".conteiner-img")

console.log(titulo)
console.log(imgPrin)
console.log(problemas)

function cambiarImg (event){
    if(!event.target.src) return
    console.log(event.target.src)
    titulo.textContent = event.target.name
    imgPrin.src = event.target.src
}

problemas.addEventListener("click",cambiarImg
)





let soluciones = document.querySelectorAll(".solucion");
let caja = document.querySelector(".caja-scroll");

let observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
}, {
  root: caja,
  threshold: 0.5
});

soluciones.forEach(sol => observador.observe(sol));





let cajas = document.querySelectorAll(".caja");
let indice = 0;

document.getElementById("siguiente").addEventListener("click", function() {
  cajas[indice].classList.remove("active"); 
  indice++; 
  if (indice >= cajas.length) {
    indice = 0;
  }
  cajas[indice].classList.add("active");
});

document.getElementById("anterior").addEventListener("click", function() {
  cajas[indice].classList.remove("active");
  indice--;
  if (indice < 0) {
    indice = cajas.length - 1;
  }
  cajas[indice].classList.add("active");
});






document.getElementById("miFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); 

  let nombre = document.getElementById("nombre").value;
  let musica = document.getElementById("musica").value;

  alert("¡Hola " + nombre + "! A mí también me gusta la música " + musica + " 😊");
});