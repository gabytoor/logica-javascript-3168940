const formulario = document.querySelector(".form")
const inputNombre = document.querySelector(".inputNombre")
const listaColores = document.querySelector("#color")
const userPage = document.querySelector(".userPage")
const imgEquipo = document.querySelector(".img-equipo")
const imgSaludo = document.querySelector(".img-saludo")
const textEquipo = document.querySelector(".text-equipo")
const btnRegresar = document.querySelector(".btn-regresar");


const enviarData =(e) => {
const equipo = document.querySelector ('input[name="equipo"]:checked')

    e.preventDefault()
    const userInfo = {
        nombre: inputNombre.value,
        color: listaColores.value,
        equipo: equipo.value
    }
    console.log(userInfo)
    document.body.style.background = userInfo.color
    userPage.style.display = "block"
    formulario.style.display = "none"


    document.querySelector(".text-saludo").textContent = `Hola ${userInfo.nombre}`
    textEquipo.textContent = userInfo.equipo

    if (userInfo.equipo === "gatos") {
    imgEquipo.src = "gato.jpg"; 
  } else if (userInfo.equipo === "mapaches") {
    imgEquipo.src = "mapache.gif";
  } else if (userInfo.equipo === "perros") {
    imgEquipo.src = "perro.jpg";
  }


  btnRegresar.addEventListener("click", () => {
  userPage.style.display = "none";  
  formulario.style.display = "block";

  formulario.reset();
  
  document.body.style.background = "white";
});

}



formulario.addEventListener("submit",enviarData)