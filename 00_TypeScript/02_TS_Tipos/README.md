# Tipos, variables y operadores en TypeScript

TS es un lenguaje tipado, es decir, las variables o referencias son de un tipo concreto. Sería equivalente a lenguajes de programación como Java o C.

Podemos encontrarnos dos grandes grupos de tipos predefinidos, los <b>Tipos primitivos</b> y los <b>Tipos de objetos</b>, aunque también podemos encontrar algunos especiales.

## Tipos primitivos

1. string: representa una cadena de caracteres.
2. number: representa un tipo numérico, puede ser tanto entero como fracciones.
3. boolean: tipo de dato lógico que representa verdadero o falso.

## Tipos de objetos

Algunos de los más importantes:

1. array: tipo de dato estructurado que permite almacenar una colección de elementos de manera ordenada.
2. tuple: similar al array, pero con un número fijo de elementos escritos.
3. any: indica que la variable puede ser de cualquier tipo. Es el supertipo de todos los objetos y primitivos. Sería equivalente a no poner tipo.
4. object: parecido a any, pero para utilizarlos solo con los objetos, no para los primitivos.

## Tipos especiales

1. void: para funciones, indica que una función no devolverá ningún valor.
2. null: representa un objeto sin valor
3. undefined: representa ausencia de valor.
4. union: un tipo que puede ser de varios tipos. Se ponen diferentes tipos separados por "|"

## Variables

Una variable por definición es un espacio en memoria con un nombre asignado. Para declarar una variable en TS debemos de seguir las siguientes reglas

1. Esta sería la manera más completa, definimos primero el alcance, luego el identificador con el tipo que queremos, y por último asignamos el valor.

        var|let [identificador] : [tipo] = [value];

2. Similar a la anterior, pero el valor será "undefined"

        var/let [identificador] : [tipo];

3. La siguiente manera sería parecida a la primera, pero el tipo de la variable se decidirá por <b>inferencia de tipos</b>, esto es, el tipo de la variable se decidirá en **el momento que se asigne el primer valor a dicha variable, cogiendo el tipo al tipo del valor asignado, y seguirá así durante todo su ciclo de vida**.

        var/let [identificador] = [value];

4. En esta última, el tipo seria "any" y el valor "undefined"

        var/let [identificador];

## Operadores

Los operadores serían los mismos que podemos encontrar en JS.

