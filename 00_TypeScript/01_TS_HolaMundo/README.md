# TS Hola Mundo

En este ejemplo simplemente vamos a ver cómo podemos usar el compilador de TS y crear nuestra primera página web con TS.

Para ello creamos el fichero <b>fichero.ts</b> cuya función será añadir un nodo H1 con el texto "Hola Mundo" a una página html.

Los siguiente que hacemos es compilar dicho fichero mediante el comando <b>tsc fichero.ts</b> (typescript compiler), para ello podemos abrir un terminar sobre el directorio 01_TS_HolaMundo. Se nos deberá crear el fichero <b>fichero.js</b>. OJO!, si ejecutamos el comando dentro de VSC debemos ejecutar el comando "set-executionpolicy remotesigned" antes de ejecutar el comando "tsc".

Por último, creamos el fichero index.html y añadimos el fichero.js que hemos compilado antes.

<b>ADVERTENCIA</b> Si tenemos abierto en VSC el fichero .ts y el fichero .js a la vez dará un error de compilación, pero no hay que hacerle caso, es un error de VSC. Recordemos que los ficheros .js no deberían de tocarse, solamente los ficheros .ts


