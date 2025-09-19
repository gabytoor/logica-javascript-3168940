const imgprincipal = document.querySelector("#imgprincipal")
const cuadro = document.querySelector("#cuadro")
const flotante = document.querySelector("#flotante")
const adelante = document.querySelector("#sig")     
const atras = document.querySelector("#ant")        
const cerrarX = document.querySelector("#equis")    
const minis = document.querySelectorAll("#fath img") 

let indice = 0

for (let i = 0; i < minis.length; i++) {
  minis[i].addEventListener("click", function () {
    indice = i
    imgprincipal.src = minis[i].src
    flotante.style.top = "0"  
  })
}

cerrarX.addEventListener("click", function () {
  flotante.style.top = "-100vh"
})

cuadro.addEventListener("click", function () {
  flotante.style.top = "-100vh"
})


adelante.addEventListener("click", function () {
  indice = indice + 1
  if (indice >= minis.length) {
    indice = 0
  }
  imgprincipal.src = minis[indice].src
})

atras.addEventListener("click", function () {
  indice = indice - 1
  if (indice < 0) {
    indice = minis.length - 1
  }
  imgprincipal.src = minis[indice].src
})