# TS Hola Mundo

En este ejemplo simplemente vamos a ver cómo podemos usar el compilador de TS y crear nuestra primera página web con TS.

Para ello creamos el fichero <b>fichero.ts</b> cuya función será añadir un nodo H1 con el texto "Hola Mundo" a una página html.

Lo siguiente que hacemos es compilar dicho fichero mediante el comando
<b>npx tsc fichero.ts</b> (TypeScript Compiler). Para ello podemos abrir una terminal
sobre el directorio `01_TS_HolaMundo`. Se deberá crear el fichero <b>fichero.js</b>.
`npx` usa la versión local de TypeScript instalada en la carpeta `00_TypeScript`, por
lo que no es necesario cambiar la política general de ejecución de PowerShell.

Por último, creamos el fichero index.html y añadimos el fichero.js que hemos compilado antes.

<b>ADVERTENCIA:</b> recordemos que los ficheros `.js` generados no deberían
modificarse. Los cambios se realizan en los ficheros `.ts` y después se vuelve a
ejecutar el compilador.


