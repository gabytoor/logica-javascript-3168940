//boolean(...)

//console.log(' "5" == "5" ', "5" == "5") //true
//console.log(' "5" === "5" ', "5" === "5") //true
//console.log(' 5 === "5" ', 5 === "5") //false
//console.log(' 5 == "5" ', 5 == "5") //true
//console.log(' 5 === (3+2) ', "5" === (3+2) ) //false
//console.log(' 5 === 5 ', 5 === 5) //true

//Pida dos números al usuario y sumelos
//let num1 = Number (prompt('Dame num 1'))
//let num2 = Number (prompt('Dame num 2'))
//let resultado = num1 + num2
//alert("El resultado de tu suma es" + resultado)

//Ejercicio de clase

let Num1 = parseInt (prompt ("Dame el valor uno"));
let Num2 = parseInt (prompt ("Dame un segundo valor"));

alert ('Los valores ingresados fueron '+Num1+" y "+Num2);

alert ('La suma de ambos valores es ' + (Num1+Num2) + '\n' +
       'La resta de ambos valores es ' + (Num1-Num2) + "\n" +
       'La multiplicación de ambos valores es ' + (Num1*Num2) + "\n" +
       'La división de ambos valores es ' + (Num1/Num2)) 

alert  ('Si sumas ambos valores que ingresaste ( ' +Num1+ ' y ' +Num2 + ' )= (' + (Num1+Num2) + ' )' + 'Y lo multiplicamos por 10, nos daría ' + ((Num1+Num2)*10)   )


//es  mejor el console.log porque arroja los datos de una vez de la operaciones, 
// con alerta también se puede pero pide muchas veces enter para continuar con los resultados


//SOLUCIÓN DE EJERCICIO CONCATENANDO (+) 
//console.log(`Tu numero es ${n1}`)
// Sirve para no poner todos los + para citar texto con variables

