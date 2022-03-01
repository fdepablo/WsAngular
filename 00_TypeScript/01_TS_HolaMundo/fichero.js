//Los comentarios en TS son iguales que en JS
/*
Varias lineas de
comentarios
*/
//Creamos una variable saludo de tipo string
var saludo = 'Hola Mundo!';
//Los puntos y comas finales son optativos
console.log(saludo);
//Creamos un nodo H1
var cabecera = document.createElement('H1');
//Añadimos el texto al H1 (Tambien podemos crear el nodo texto y añadirlo)
cabecera.textContent = saludo;
//Añadirmos la cabecera a la pagina web
document.body.appendChild(cabecera);
