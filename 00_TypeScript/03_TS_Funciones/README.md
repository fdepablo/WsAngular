# Funciones en TypeScript

Las funciones son bloques de código que permiten reutilizar dicho código en varias partes de la aplicación. Una función organiza el programa en bloques lógicos de código. Una función es un conjunto de declaraciones para realizar una tarea especifica.

La sintaxis básica para escribir una función en TS sería:

    function name(parameter: type, parameter:type,...): returnType {
        // do something
    }

Podemos poner parámetros opcionales. En el siguiente ejemplo el primer parámetro sería
obligatorio mientras que el segundo sería optativo. Esto permite llamar a la función
con diferente número de argumentos; la sobrecarga de funciones en TypeScript se expresa
mediante varias firmas de sobrecarga seguidas de una única implementación.

    function name(parameter: type, parameter?:type): returnType {
        // do something
    }

Podemos declarar argumentos variables de entrada, es decir, que pueden entrar entre 0 y N parametros. Esta forma sería muy parecida a la de lenguajes como Java y la manera de tratarlo sería como un Array

    function name(...parameters: type[]): returnType {
        // do something
    }

En TS podemos poner valores por defecto a los parametros de entrada, en caso de que nos lleguen tomaran dicho valor, en caso contrario tomaran el valor por defecto. Un parametro no puede ser declarado opcional y por defecto al mismo tiempo.

    function name(parameter: type, parameter:type = default_value): returnType {
        // do something
    }
