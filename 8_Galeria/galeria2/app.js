const titulo = document.querySelector (".titulo")
const screen = document.querySelector (".screen")
const miniaturas = document.querySelector (".container-min")

console.log(titulo)
console.log(screen)
console.log(miniaturas)

function cambiarImg (event){
    if(!event.target.src) return
    console.log(event.target.src)
    titulo.textContent = event.target.name
    screen.src = event.target.src

    document.body.style.backgroundImage = `url('${event.target.src}')`
}

miniaturas.addEventListener("click",cambiarImg
    
)