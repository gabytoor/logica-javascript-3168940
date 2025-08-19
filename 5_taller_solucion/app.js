

// SOLUCIÓN TALLER_______



// 1------------------------------------------------------------------------------
/*
let numero = Number(prompt ("Ingresa un número (ya sea positivo o negativo)"));

if (numero > 0){ alert("El número ingresado es positivo");}
else if (numero < 0){ alert("El número ingresado es negativo");}
else {alert("El número ingresado es cero");}
*/



// 2-------------------------------------------------------------------------------


/*

let numero1 = prompt ("Ingresa un número (Ya sea positivo o negativo)")
let numero2 = prompt ("Ingresa otro número (Ya sea positivo o negativo)")

if (numero1 > 0){alert("El número ingresado ("+numero1+ ") es positivo");}
if (numero2 > 0) {alert("El número ingresado (" +numero2+") es positivo");}

*/ 

// 3-------------------------------------------------------------------------------


/*
let numero1 = parseInt( prompt ("Ingresa un número") )
let numero2 = parseInt(prompt ("Ingresa otro número")) 

if (numero1 === numero2) {
    let multiplicacion = (numero1*numero2)
    {alert  ("La multiplicación de ambos números es " + multiplicacion)};
}

if (numero1 > numero2) {
    let resta = (numero1-numero2)
    {alert("la resta de ambos números es "+ resta)};}

if (numero1 < numero2) {
    let suma = (numero1 + numero2)
    {alert("La suma de ambos valores es " + suma)};
}
*/


// 4-------------------------------------------------------------------------------


/*
let valor_producto = Number (prompt("ingrese el valor del producto"))
let valor_a_pagar = Number (prompt("Ingresa el valor con el que pagarás"))

if (valor_producto === valor_a_pagar){alert(("Sobrante = $0.0"));}
if (valor_producto < valor_a_pagar){
    let sobrante = (valor_a_pagar - valor_producto)
    {alert ("El sobrante es $" + sobrante)};}

if (valor_producto > valor_a_pagar){
    let faltante = ( valor_producto - valor_a_pagar)
    {alert ("Te faltan $" + faltante + " Para completar el valor")};}
*/


// 5-------------------------------------------------------------------------------


/*
let vacuna = Number (prompt ("Ingrese solo el valor de la vacuna (x unidad)"))
let aplicacion = Number (prompt ("Ingrese solo el valor de aplicación (x unidad)"))
let dia = Number (prompt ("Ingrese la cantidad de vacunas aplicadas en el día"))
let servicio_total = (vacuna + aplicacion)
let gastado = (dia * servicio_total)
let solo_vacuna = (vacuna * dia)
let solo_aplicacion = (aplicacion * dia)

{alert ("Se aplicaron " + dia + " vacunas en el día " + "\n" +
    "Valor total = $" + gastado + "\n" +
    "Valor solo vacunas = $" + solo_vacuna + "\n" +
    "Valor solo aplicación = $" + solo_aplicacion + "\n" 
 );}
*/


// 6------------------------------------------------------------------------------


/*
let cantidad = Number(prompt("Ingresa la cantidad de camisas que desea llevar (Máximo cinco productos)"));
let total = 0;

if (cantidad <= 5) {
    

    for (let i = 1; i <= cantidad; i++) {
        let valor = Number(prompt("Ingresa el valor de la camisa #" + i));
        total += valor;
    }
    

    alert("El valor total de las " + cantidad + " camisas es: " + total);
} else {
    alert("No se facturan más de cinco artículos");}




if (cantidad <= 2){
    let descuento_1 = (total - (total * 0.10));
    {alert ("Se te aplicará un descuento del 10% a tu compra " + "\n" +
                                           "Total antes = " + total + "\n" +
                                           "Total ahora = " + descuento_1)};
}

else {
    let descuento_2 = (total - (total * 0.20));
    {alert ("Se te aplicará un descuento del 20% a tu compra " + "\n" +
                                           "Total antes = " + total + "\n" +
                                           "Total ahora = " + descuento_2)};
    }



*/


// 7----------------------------------------------------------------------------


/*
let presupuesto = Number (prompt("Ingrese el presupuesto con el que iniciará el día de ventas"))
let ventas = Number (prompt ("Ingrese la cantidad de ventas que realizó en el día"))
let total = 0

if (ventas <= 4){

    for (let i = 1; i <= ventas; i++){
        let venta = Number (prompt("Ingrese el valor de la venta #" + i));
        total += venta;
    }
}

alert ("La cantidad vendida en el día fue $" + total);

let dinero_colectado = (total + presupuesto); 
{alert ("La cantidad vendida en el día (" + total + ")" + "\n" +
        "Más el presupuesto inicial (" + presupuesto + ")" + "\n" + 
        "Da como resultado un presupuesto total por= " + dinero_colectado + "\n" +
        "El 10% correspondiente a los acrededores se calcula a partir de tu presupuesto total," + "\n" +
        "Por lo cual, este valor correspondería a = $" + (dinero_colectado * 0.10) + "\n" +
        "Dejándote con un saldo de = $" + (dinero_colectado - (dinero_colectado * 0.10)));}

*/


// 8-------------------------------------------------------------------------------


/*
let dias = Number (prompt ("Ingrese la cantidad de días que deseas promediar"))
let total = 0

for (let i = 1; i <= dias; i++){
    let ingresos = Number (prompt("Ingrese las el valor de ventas del día #" + i))
    total += ingresos}

alert ("El total de ganancias por los " + dias + " días ingresados es = $" + total + "\n" +
       "El promedio por estos días es = " + (total / dias));

*/


// 9-------------------------------------------------------------------------------


/*
let operacion = prompt("Ingrese el signo de la operación que desea realizar ( + , - , * , / )");

if (operacion === "+") {
    let cantidad_suma = Number(prompt("¿Cuántos datos deseas sumar?"));
    let totalSuma = 0;

    for (let i = 1; i <= cantidad_suma; i++) {
        let suma = parseInt(prompt("Ingresa el valor #" + i + " a sumar"));
        totalSuma += suma;
    }

    alert("La suma de los valores ingresados es = " + totalSuma);
}

else if (operacion === "-") {
    let cantidad_resta = Number(prompt("¿Cuántos datos deseas restar?"));
    let totalResta = Number(prompt("Ingresa el valor #1 a restar")); // inicializar con el primero

    for (let i = 2; i <= cantidad_resta; i++) {
        let resta = parseInt(prompt("Ingresa el valor #" + i + " a restar"));
        totalResta -= resta;
    }

    alert("La resta de los valores ingresados es = " + totalResta);
}

else if (operacion === "*") {
    let cantidad_multiplicacion = Number(prompt("¿Cuántos datos deseas multiplicar?"));
    let totalMultiplicacion = Number(prompt("Ingresa el valor #1 a multiplicar")); // inicializar con el primero

    for (let i = 2; i <= cantidad_multiplicacion; i++) {
        let multiplicacion = parseInt(prompt("Ingresa el valor #" + i + " a multiplicar"));
        totalMultiplicacion *= multiplicacion;
    }

    alert("La multiplicación de los valores ingresados es = " + totalMultiplicacion);
}

else if (operacion === "/") {
    let cantidad_division = Number(prompt("¿Cuántos datos deseas dividir?"));
    let totalDivision = Number(prompt("Ingresa el valor #1 a dividir")); // inicializar con el primero

    for (let i = 2; i <= cantidad_division; i++) {
        let division = parseInt(prompt("Ingresa el valor #" + i + " a dividir"));
        totalDivision /= division;
    }

    alert("La división de los valores ingresados es = " + totalDivision);
}

else {
    alert("El dato ingresado no corresponde a los indicados anteriormente ( + , - , * , / )");
}
*/


// 10----------------------------------------------------------------------------------------


let num1 = parseInt (prompt("Ingresa un número"));
let num2 = parseInt (prompt("Ingresa un segundo número"));
let num3 = parseInt (prompt("Ingresa un tercer número"));

if (num1 !== num2 !== num3) {
let mayor = Math.max (num1, num2, num3)
let menor = Math.min (num1, num2, num3)
let medio = (num1 + num2 + num3 - mayor - menor)

alert ("El número mayor es = " + mayor)
alert ("El número menor es = " + menor)
alert ("El número medio es = " + medio);
}


if (num1 === num2 && num1 !== num3) {
        alert("Los números que se repiten son: " + num1);} 
else if (num1 === num3 && num1 !== num2) {
        alert("Los números que se repiten son: " + num1);} 
else if (num2 === num3 && num2 !== num1) {
        alert("Los números que se repiten son: " + num2);} 
else { alert("Los tres números son iguales: " + num1);}

    
    
    
