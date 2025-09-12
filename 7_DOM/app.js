// Seleccionar los elementos con los que va a interactura o los que responden a la interacción

// const no puede modificarr, no altera la variables

const pantalla = document.querySelector (".pantalla")
const btnMenos = document.querySelector (".btn-menos")
const btnMas = document.querySelector (".btn-mas")

// primero se le pone el nombre a mi variable
// document.queryselector me llama a mi documento htmml principal
// .pantalla es el nombre de mi clase en html


// 2. Crear la FUNCIÓN
let counter = 0

function incrementar () {
    counter++
    pantalla.textContent = counter

    if (counter >= 10){
        pantalla.style.color = "red"
    }

    if (counter >= 30){
        document.body.style.backgroundColor = "blue";
    }
    }


// textContent es el contenido textual dentro de las propiedades en html

function decrementar () {
    counter--
    pantalla.textContent = counter

    if (counter < 10){
        pantalla.style.color = "black"
    }

    if (counter < 30){
        document.body.style.backgroundColor = "white";
    }

    if (counter < 0)
    {}
}



// 3. Crear el evento

btnMas.addEventListener("click", incrementar) /*Aquí ponemos las funciones que queremos que haga, dará click y va a empezar a incrementar*/
btnMenos.addEventListener("click", decrementar) /*Aquí ponemos las funciones que queremos que haga, dará click y va a empezar a incrementar*/

