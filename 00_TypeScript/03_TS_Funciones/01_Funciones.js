//Función que suma 2 números e imprime su resultado
//Podemos poner ":void" o no poner nada
function sumarEnConsola(a, b) {
    let resultado = a + b;
    console.log(resultado);
}
console.log("sumarEnConsola");
sumarEnConsola(10, 34);
//Función que suma dos números y los devuelve
function sumar(a, b) {
    let resultado = a + b;
    return resultado;
}
console.log("sumar");
console.log(sumar(4, 5));
//Función que suma tres números, el último es opcional
function sumarConValorOpcional(a, b, c) {
    //si no le pasamos el valor a "c", seria "undefined"
    //Para evitar problemas a la hora de trabajar con "undefined" podemos 
    //preguntar por su valor
    /*if(typeof(c)=="undefined"){
        c = 0;
    }*/
    //también podemos usar el operador "??", que en caso de que el valor a la izquierda
    //del operador NO sea "undefined" entonces tomará dicho valor, en caso contrario
    //tomará el valor de la derecha
    c = c !== null && c !== void 0 ? c : 0;
    let resultado = a + b + c;
    return resultado;
}
console.log("sumarConValorOpcional");
console.log(sumarConValorOpcional(1, 2, 3));
console.log(sumarConValorOpcional(5, 2));
//Función que suma un número variable de parámetros de entrada
function sumarParametrosVariables(...numeros) {
    let resultado = 0;
    for (let numero of numeros) {
        resultado += numero;
    }
    return resultado;
}
console.log("sumarParametrosVariables");
console.log(sumarParametrosVariables(1, 2, 3));
console.log(sumarParametrosVariables(1, 2));
console.log(sumarParametrosVariables(1, 2, 3, 4, 5));
console.log(sumarParametrosVariables());
//Funciones con parámetros optativos y por defecto
//Si al llamar a la función no le pasamos el valor del segundo 
//parámetro, entonces tomará el valor que este indicado en la
//función.
function concatenarNombre(a, b = "of Duty") {
    return a + " " + b;
}
console.log("concatenarNombre");
console.log(concatenarNombre("League", "of Legends")); //League of Legends
console.log(concatenarNombre("Call")); //Call of Duty
