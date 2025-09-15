const titulo = document.querySelector(".titulo")
const contenedor = document.querySelector("#contenedor")
const botonSig = document.querySelector(".botonSig")
const botonAnt = document.querySelector(".botonAnt")
const titulos = [
    "Primera imagen",
    "Segunda imagen",
    "Tercera imagen",
    "Cuarta imagen",
    "Quinta imagen",
]
let i = 1

function prev () {
    console.log("Anterior...")

    i--; 
    if (i < 0) {
        i = 4; 
    }

    titulo.textContent = titulos[i]
    contenedor.style.marginLeft = `-${400 * i}px`
    contenedor.style.transitionDuration = ".5s"
}


function next (){
    console.log(i)
        if(i===5){
            i = 0
        }
        titulo.textContent = titulos [i]
        contenedor.style.marginLeft = `-${400 * i}px`
        contenedor.style.transitionDuration = ".5s"
        i++}

    


botonAnt.addEventListener("click",prev)
botonSig.addEventListener("click",next)