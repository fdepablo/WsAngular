//Función que suma 2 numeros e imprime su resultado
function sumarEnConsola(a, b) {
    var resultado = a + b;
    console.log(resultado);
}
console.log("sumarEnConsola");
sumarEnConsola(10, 34);
//Funcion que suma dos números y los devuelve
function sumar(a, b) {
    var resultado = a + b;
    return resultado;
}
console.log("sumar");
console.log(sumar(4, 5));
//Funcion que suma tres números, el último es opcional
function sumarConValorOpcional(a, b, c) {
    //si no le pasamos el valor a "c", seria "undefined"
    //Para evitar problemas a la hora de trabajar con "undefined" podemos 
    //preguntar por su valor
    /*if(typeof(c)=="undefined"){
        c = 0;
    }*/
    c = c !== null && c !== void 0 ? c : 0;
    var resultado = a + b + c;
    return resultado;
}
console.log("sumarConValorOpcional");
console.log(sumarConValorOpcional(1, 2, 3));
console.log(sumarConValorOpcional(5, 2));
//Funcion que suma un número variable de parametros de entrada
function sumarParametrosVariables() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    var resultado = 0;
    for (var _a = 0, numeros_1 = numeros; _a < numeros_1.length; _a++) {
        var numero = numeros_1[_a];
        resultado += numero;
    }
    return resultado;
}
console.log("sumarParametrosVariables");
console.log(sumarParametrosVariables(1, 2, 3));
console.log(sumarParametrosVariables(1, 2));
console.log(sumarParametrosVariables(1, 2, 3, 4, 5));
console.log(sumarParametrosVariables());
function concatenarNombre(a, b) {
    if (b === void 0) { b = "of Duty"; }
    return a + " " + b;
}
console.log("concatenarNombre");
console.log(concatenarNombre("League", "of Legends")); //League of Legends
console.log(concatenarNombre("Call")); //Call of Duty
