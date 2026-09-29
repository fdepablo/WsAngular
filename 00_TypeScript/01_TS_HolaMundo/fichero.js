//Los comentarios en TS son iguales que en JS
/*
Varias lineas de
comentarios
*/
//Creamos una variable saludo de tipo string
var saludo = 'Hola Mundo!';
//Los puntos y comas finales son optativos
console.log(saludo);
//Creamos un nodo elemento H1
var cabeceraH1 = document.createElement('H1');
//Añadimos el texto al H1 (Tambien podemos crear el nodo texto y añadirlo)
cabeceraH1.textContent = saludo;
//<h1>Hola Mundo!</h1>
//Añadirmos la cabeceraH1 a la pagina web
document.body.appendChild(cabeceraH1);
/*
<body>
    <h1>Hola Mundo!</h1>
</body>
*/ 
