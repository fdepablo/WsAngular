//Podemos compilar este codigo con "tsc tipos.ts" y luego ejecutarlo con "node tipos.js"
let numero1 : string = "Natasha"
var numero2 : number
let numero3 = 10
let numero4

console.log(numero1)
console.log(numero2)//undefined
console.log(numero3)
console.log(numero4)//undefined

//tambien podemos declarar constantes
const CONSTANTE : number = 35

//La siguiente linea da error, el tipo es number por declaración
//numero1 = "Steve";

//La siguiente linea da error, el tipo de numero3 es de tipo number, que
//se establecio por inferencia de tipos en tiempo de ejecución
//numero3 = "Tony"

//Pero podemos cambiar el valor a cualquier tipo que admita
numero3 = 45
numero3 = 34.56
numero3 = null
numero3 = undefined

//booleans
let verdadero : boolean = true

//Tipo any, este sería para apuntar a cualquier tipo
let variable : any = "Thor"
variable = 5
variable = false

//--Arrays
let numeros : number[] = [1,2,3]
//Por inferencia de tipos
let numeros2 = [1,2,3]

numeros[1] = 0
//La siguiente linea error
//numeros[1] = "Steve"
numeros2[1] = 4
//la siguiente linea error, por inferencia se determino que el array sería de numeros
//numeros2[1] = "Thanos"

//Tambien podemos crear Arrays mediante generics como en Java
let numeros3 : Array<number> = [1,2,3]
console.log(numeros3)

//--Tuplas
let colorRojo: [number, number, number] = [255, 0, 0];
//Por inferencia de tipos
let colorVerde  = [0, 255, 0];

colorRojo[0] = 0;
colorVerde[2] = 255;//no podriamos asignar un String
console.log(colorRojo)

// Tipo union
let numero : number | string;
numero = 5
numero = "5"
