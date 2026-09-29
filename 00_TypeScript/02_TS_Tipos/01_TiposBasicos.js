//Podemos compilar este codigo con "tsc tipos.ts" y luego ejecutarlo con "node tipos.js"
var nombre1 = "Natasha";
var numero2;
var numero3 = 10;
var numero4;
console.log(nombre1);
console.log(numero2); //el tipo es number y su valor es undefined
console.log(numero3); //el tipo es number y su valor es 10
console.log(numero4); //el tipo es any y su valor es undefined
//tambien podemos declarar constantes
var CONSTANTE = 35;
//La siguiente linea da error, el tipo es number por declaración
//nombre1 = 10;
//La siguiente linea da error, el tipo de numero3 es de tipo number, que
//se establecio por inferencia de tipos en tiempo de ejecución
//numero3 = "Tony"
//Pero podemos cambiar el valor a cualquier tipo que admita
numero3 = 45;
numero3 = 34.56;
numero3 = null;
numero3 = undefined;
//booleans
var verdadero = true;
//Tipo any, este sería para apuntar a cualquier tipo
var variable = "Thor";
variable = 5;
variable = false;
//--Arrays
var numeros = [1, 2, 3];
//Por inferencia de tipos
var numeros2 = [1, 2, 3];
numeros[1] = 0;
//La siguiente linea error
//numeros[1] = "Steve"
numeros2[1] = 4;
//la siguiente linea error, por inferencia se determino que el array sería de numeros
//numeros2[1] = "Thanos"
//Tambien podemos crear Arrays mediante generics como en Java
var numeros3 = [1, 2, 3];
console.log(numeros3);
//--Tuplas
var colorRojo = [255, 0, 0];
//Por inferencia de tipos
var colorVerde = [0, 255, 0];
colorRojo[2] = 0;
colorVerde[2] = 255; //no podriamos asignar un String
console.log(colorRojo);
// Tipo union
var numero;
numero = 5;
numero = "cinco";
//Error, no puede ser boolean
//numero = true
