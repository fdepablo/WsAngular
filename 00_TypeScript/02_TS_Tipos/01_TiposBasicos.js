//Podemos compilar este codigo con "tsc tipos.ts" y luego ejecutarlo con "node tipos.js"
let nombre1 = "Natasha Romanoff";
var numero2 = 12;
let numero3 = 10;
let numero4;
console.log(nombre1); //el tipo es string y su valor es "Natasha Romanoff"
console.log(numero2); //el tipo es number y su valor es 12
console.log(numero3); //el tipo es number y su valor es 10
console.log(numero4); //el tipo es any y su valor es undefined
//tambien podemos declarar constantes
const CONSTANTE_NUMERICA = 35;
//La siguiente linea da error, el tipo es number por declaración
//nombre1 = 10;
//La siguiente linea da error, el tipo de numero3 es de tipo number, que
//se establecio por inferencia de tipos en tiempo de ejecución
//numero3 = "Tony"
//Pero podemos cambiar el valor a cualquier tipo que admita
numero3 = 45;
numero3 = 34.56;
//numero3 = null //los numericos no admiente 'null'
//numero3 = undefined //los numericos no admiente 'undefined'
//booleans
let verdadero = true;
//Tipo any, este sería para apuntar a cualquier tipo
let variable = "Thor";
variable = 5;
variable = false;
variable = null;
variable = undefined;
//--Arrays
let numeros = [1, 2, 3];
//Por inferencia de tipos
let numeros2 = [1, 2, 3];
numeros[1] = 0;
//La siguiente linea error
//numeros[1] = "Steve"
numeros2[1] = 4;
//la siguiente linea error, por inferencia se determino que el array sería de numeros
//numeros2[1] = "Thanos"
//Tambien podemos crear Arrays mediante generics como en Java
let numeros3 = [1, 2, 3];
console.log(numeros3);
//--Tuplas
let colorRojo = [255, 0, 0];
//Por inferencia de tipos
let colorVerde = [0, 255, 0];
colorRojo[2] = 0;
colorVerde[2] = 255; //no podriamos asignar un String
console.log(colorRojo);
// Tipo union
let numero;
numero = 5;
numero = "cinco";
//Error, no puede ser boolean
//numero = true
