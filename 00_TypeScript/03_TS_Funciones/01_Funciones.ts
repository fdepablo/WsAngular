
//Función que suma 2 numeros e imprime su resultado
function sumarEnConsola(a: number, b:number) {
    let resultado = a + b;
    console.log(resultado)
}
console.log("sumarEnConsola")
sumarEnConsola(10,34);

//Funcion que suma dos números y los devuelve
function sumar(a: number, b:number): number {
    let resultado = a + b;
    return resultado;
}

console.log("sumar")
console.log(sumar(4,5))

//Funcion que suma tres números, el último es opcional
function sumarConValorOpcional(a: number, b:number, c?: number): number {
    //si no le pasamos el valor a "c", seria "undefined"
    //Para evitar problemas a la hora de trabajar con "undefined" podemos 
    //preguntar por su valor
    /*if(typeof(c)=="undefined"){
        c = 0;
    }*/
    //Tambien podemos usar el operador "??", que en caso de que el valor a la izquierda
    //del operador NO sea "undefined" entonces tomará dicho valor, en caso contrario
    //tomará el valor de la izquierda
    c = c ?? 0
    let resultado = a + b + c;
    return resultado;
}

console.log("sumarConValorOpcional")
console.log(sumarConValorOpcional(1,2,3))
console.log(sumarConValorOpcional(5,2))

//Funcion que suma un número variable de parametros de entrada
function sumarParametrosVariables(...numeros: number[]): number {
    let resultado = 0;
    for(let numero of numeros){
        resultado += numero;
    }
    return resultado;
}

console.log("sumarParametrosVariables")
console.log(sumarParametrosVariables(1,2,3))
console.log(sumarParametrosVariables(1,2))
console.log(sumarParametrosVariables(1,2,3,4,5))
console.log(sumarParametrosVariables())

function concatenarNombre(a: string, b:string = "of Duty"): string{
    return a + " " + b;
}

console.log("concatenarNombre")
console.log(concatenarNombre("League","of Legends"))//League of Legends
console.log(concatenarNombre("Call"))//Call of Duty