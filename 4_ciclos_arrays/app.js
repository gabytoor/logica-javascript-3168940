//Array

/*let frutas = [mango,"piña","papaya","uva","limón","aguacate"]
let jugadores = [
  {
    id: 1,
    nombre: "diaz", 
    pais: "col"
  },
    "james",
    "messi"
  ]

//Objeto
let mango = {
  nombre: "Back to the future",
  estreno: 1986,
  director:  "Robert Zemeckis",
  calificacion: "8.5"
}
  */





/*
var texto= "";
var i = 0;

do {
  texto += "El número es:" + i;
  i++;
}

while (i < 10);
*/


/*
var texto ="";
var i = 0;

while (i <= 10) {
  texto += "<br> El número es" + i;
}

*/

/*
let numero = parseInt(prompt('Ingresa un número del 1 al 100'));

while */





// EJERCICIO 1
/*
let num = Number( prompt("Introduce un número"))
let counter = 1

while (counter <= num){
  if (counter % 5 === 0 ){
  console.log(counter)
}
  counter++
}








// EJERCICIO 2

// Primero evalua y luego ejecuta
while(){}

// Primero ejecuta y luego evalua
do
{if (counter % 5 === 0 ){
  console.log(counter)
}
  counter++
}
while(counter <= num)




// EJERCICIO 3

for(let i = 1; i <= 50; i++){
  if(i % 2 !=0 ){
    console.log(i)
  }
}




//CREE UN CICLO FOR QUE IMPRIMA LA TABLA DE MULTIPLICAR DEL 7

for(let i = 1; i <= 10; i++){
    console.log(`7 x ${i} = ${7*1}`)
  
}


*/




// EJERCICIO 5


for (let i = 1; i <= 100; i++){
  if(i >= 20 && i <= 30){
    continue
  }
  console.log(i)
}