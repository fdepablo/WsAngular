# 08ClienteHttp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

# HTTP Client

**HttpClient** es un cliente HTTP hecho en JS con los métodos HTTP más habituales, muy usado para consumir APIs Rest. Esta librería está basada en **Observables**, que son objetos cuyo propósito es la de realizar tareas asíncronas. 

Básicamente, **HTTPClient** es lo que vamos a utilizar para hacer llamadas a una API REST y obtener resultados de esta.

Los métodos más usados de esta librería son los siguientes

    get(url: string, options: {...}): Observable<any> //Para obtener información
    delete(url: string, options: {...}): Observable<any> //Para borrar información
    post(url: string, body: any|null, options: {...}): Observable<any> //Para dar de alta información
    put(url: string, body: any|null, options: {...}): Observable<any> //Para modificar información

Podemos ver como los métodos devuelven un objeto de tipo **Observable**. Estos objetos representan una colección de futuros valores, es decir, que no tenemos todavía pero que tendremos en un futuro. Aquí es donde entra el juego la llamada programación reactiva, que es un paradigma de la programación enfocado en el trabajo con flujos de datos finitos o infinitos de manera asíncrona.

Uno de los métodos más importantes de la clase Observable es el método **subscribe()**. Las peticiones (get, post, etc.) no se lanzarán hasta que no se ejecute el método **subscribe()**, al que tendremos que pasarle una función de **callback** o retro llamada, normalmente una función **lambda**. Dicha función de callback, se ejecutará cuando el servidor responda a la petición. Todas estas peticiones se ejecutarán de manera asyncrona ya que no podemos saber cuando se el servidor nos responderá.

El objeto Observable que devuelve permite tipos de datos o genericos

    get(url: string, options: {...}): Observable<Persona>

HttpClient te devuelve directamente el body de la respuesta en formato Json, lo cual suele simplificar el código.

Un ejemplo sencillo de una petición get a un servicio REST podría ser la siguiente

    httpClient.get('http://miapirest/personas')
        .subscribe(respuesta => {//respuesta es un objeto Json que contiene el body
            console.log(respuesta);
        });

Es una buena práctica que sea un **servicio** el que se encargue de hacer las peticiones http hechas por esta librería. El componente sería el que se encargue de usar dicho servicio.

Para usar esta librería en Angular debemos de importar el módulo **HttpClientModule** dentro del fichero **app.module.ts**

## Poner en marcha el servidor REST

Este ejemplo va a utilizar un servicio REST hecho con SpringBoot cuyo código fuente está en este [enlace](https://github.com/fdepablo/WorkspaceJava/tree/master/27_SpringBootRestJpaData).

Dicho servicio acepta las siguientes peticiones

    - GET /personas -> Devuelve toda la lista de personas
    - GET /personas/{ID} -> Devuelve una persona por ID. Devuelve 200 Si la encuentra, 404 en caso contrario.
    - POST /personas -> Da de alta una persona en formato Json enviado en el body. El ID lo generará el propio servicio. Devuelve 201 y la persona dada de alta.
    - PUT /personas/{ID} -> Modifica una persona por ID en formato Json enviado en el body. Devuelve 200 Si la encuentra, 404 en caso contrario.
    - DELETE /personas/{ID} -> Borra una persona por ID. Devuelve 200 Si la encuentra, 404 en caso contrario.

El fichero .jar ejecutable se puede encontrar en la raíz de este workspace, para arrancar el servidor simplemente tenemos que ejecutar el fichero **restPersona.bat** que también está en dicha raíz.

Una vez arrancando, ya podremos poner en marcha la aplicación.

## Visualización del ejemplo

Este ejemplo va a seguir la metodología vista en el ejemplo 07_Servicios, pero esta vez, el servicio que vamos a crear va a usar la librería HttpClient para hacer peticiones Http al servidor REST.

Para este ejemplo, en vez de utilizar la entidad héroe, vamos a utilizar la entidad **persona**, que tiene un id, nombre, apellidos y edad.

Vamos a tener los siguientes componentes

1. cabecera, muestra una cabecera de la página.
2. pie-de-pagina, muestra el pie de página.
3. personas, se encarga de mostrar el formulario e interactuar con el servicio de personas.
4. persona, se encarga de pintar cada una de las personas.

## Bibliografía

- [HTTP] (https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto)
- [REST] (https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional)
- [CORS Cliente] (https://www.stackhawk.com/blog/angular-cors-guide-examples-and-how-to-enable-it/)
- [CORS Spring Servidor] (https://www.arquitecturajava.com/spring-rest-cors-y-su-configuracion/)
- [Observables](https://medium.com/@mayrarodriguez/conozcamos-los-observables-15ee9e7c5aa9)
- [Metodo Pipe](https://www.tektutorialshub.com/angular/angular-observable-pipe/#:~:text=The%20pipe%20method%20of%20the,or%20as%20an%20instance%20method.)
