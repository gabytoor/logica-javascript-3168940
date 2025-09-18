const valorVertical = document.querySelector(".valor-vertical")
const main = document.querySelector("#main")
const valorHorizontal = document.querySelector(".valor-horizontal")
const bola = document.querySelector(".bola")

console.log(main)
console.log(valorVertical)
console.log(valorHorizontal)

function verScroll () {
    let top = main.scrollTop
    let left = main.scrollLeft
    valorVertical.textContent =`V: ${top}`
    valorHorizontal.textContent =`H: ${left}`
    bola.style.top = `${top}px`
    bola.style.left = `${left}px`
    bola.style.transform = `scale(${(top/30)})`
    
}

main.addEventListener("scroll",verScroll)
