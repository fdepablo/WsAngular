# 08ClienteHttp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

# HTTP Client

**HttpClient** es un cliente HTTP hecho en JS con los métodos más habituales( GET, POST, PUT, etc.). Esta librería está basada en **Observables** y su propósito es la de realizar peticiones HTTP de manera asíncronas. 

**HTTPClient** es utilizada principalmente para consumir una **API REST** y obtener resultados de esta (normalmente en formato Json).

Los métodos más usados de esta librería son los siguientes

    get(url: string, options: {...}): Observable<any> //Para obtener recursos
    delete(url: string, options: {...}): Observable<any> //Para borrar recursos
    post(url: string, body: any|null, options: {...}): Observable<any> //Para dar de alta recursos
    put(url: string, body: any|null, options: {...}): Observable<any> //Para modificar recursos

Podemos ver como los métodos devuelven un objeto de tipo **Observable**. Estos objetos representan una colección de futuros valores, es decir, valores que no tenemos todavía pero que tendremos en un futuro. Aquí es donde entra el juego la llamada **programación reactiva**, que es un paradigma de la programación enfocado en el trabajo con flujos de datos finitos o infinitos de manera asíncrona.

Uno de los métodos más importantes de la clase **Observable** es el método **subscribe()**. Las peticiones (get, post, etc.) no se lanzarán hasta que no se ejecute el método **subscribe()**, al que tendremos que pasarle una función de **callback** o retro llamada. Dicha función puede ser una una función **lambda** o una función JS normal y se ejecutará cuando el servidor responda a la petición. Todas estas peticiones se ejecutarán normalmente de manera asíncrona ya que no podemos saber cuando el servidor nos responderá.

Una función **lambda** tiene el siguiente formato:

    pararametroEntrada => {
        //TODO
        console.log(pararametroEntrada);
    }

Que tendría su equivalente en funciones clásicas:

    function(parametroEntrada){
        //TODO
        console.log(pararametroEntrada);
    }

**HttpClient** devuelve el body de la respuesta HTTP en formato **Json**, lo cual suele simplificar el código a la hora de manejar la información.

Un ejemplo sencillo de una petición **get** a un servicio REST podría ser la siguiente

    httpClient.get('http://miapirest/mirecurso')
        .subscribe(respuesta => {//'respuesta' es el contenido del body
            console.log(respuesta);
        });

Aunque normalmente nos interesa hacer control de errores, por lo que debemos usar el siguiente formato:

    httpClient.get('http://miapirest/mirecurso')
        .subscribe({
            next : respuesta => {//Si todo ha ido bien se ejecuta esta función
              console.log(respuesta}) 
            },
            error: e => {
              console.log(e})//Si hay algún error se ejecuta está otra
            }
        });

En este caso, al método **subscribe** no le pasamos una única función de **callback**, le pasamos dos funciones dentro de un objeto **Json**. La primera función **next**, será ejecutada en caso de que todo haya ido bien. La segunda función **error**, será ejecutada cuando haya ocurrido alguna excepción.

Es una buena práctica que sea un **servicio** el que se encargue de hacer las peticiones HTTP. El componente sería el que se use dicho servicio.

Para usar esta librería en Angular debemos de importar el módulo **HttpClientModule** dentro del fichero **app.module.ts**

## Poner en marcha el servicio REST

Este ejemplo va a utilizar un servicio REST hecho con SpringBoot cuyo código fuente está en este [enlace](https://github.com/fdepablo/WorkspaceJava/tree/master/27_SpringBootRestJpaData). Es un servicio que realiza un CRUD con una entidad persona, que tiene un id, un nombre, unos apellidos y una edad.

Todo el intercambio de información de cliente y servidor será en formato **Json**.

Dicho servicio acepta las siguientes peticiones

    - GET /personas -> Devuelve 200 y toda la lista de personas.
    - GET /personas/{ID} -> Devuelve una persona por ID. Si existe la persona, devuelve 200 y el objeto de tipo persona, en caso contrario devuelve 404.
    - POST /personas -> Da de alta una persona enviada en el body. El ID de la persona lo generará el propio servicio. Devuelve 201 y la persona dada de alta con el ID generado.
    - PUT /personas/{ID} -> Modifica una persona por ID enviada en el body. Devuelve 200 si la encuentra, 404 en caso contrario.
    - DELETE /personas/{ID} -> Borra una persona por ID. Devuelve 200 y el objeto de tipo persona si la encuentra, 404 en caso contrario.

Podemos encontrar el ejecutable con el servicio en el fichero **.jar** de la raíz de este workspace. Para arrancar el servicio simplemente tenemos que ejecutar el fichero **ejecutarRestPersona.bat**, que también está en la raíz del proyecto, mediante una terminal de comandos.

Una vez arrancando, ya podremos poner en marcha la aplicación. El servicio se arrancara en **http://localhost:8080**.

También podemos usar un navegador o la aplicación **Postman** para hacer las peticiones y commprobar que el servicio Rest está funcionando.

Para parar el servicio podemos pulsar **ctrl+C**

## Visualización del ejemplo

Este ejemplo va a seguir la metodología vista en el 07_Servicios, pero esta vez, el servicio que vamos a crear va a usar la librería HttpClient para hacer peticiones al servidor REST.

Además, en vez de utilizar la entidad **héroe**, vamos a utilizar la entidad **persona**, que tiene como atributos id, nombre, apellidos y edad.

Vamos a tener los siguientes componentes

1. cabecera, muestra una cabecera de la página.
2. pie-de-pagina, muestra el pie de página.
3. personas, se encarga de mostrar el formulario e interactuar con el servicio de personas.
4. persona, se encarga de pintar cada una de las personas.

También tendremos la entidad "persona" y el servicio "persona"

## Bibliografía

- [HTTP](https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto)
- [REST](https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional)
- [CORS Cliente](https://www.stackhawk.com/blog/angular-cors-guide-examples-and-how-to-enable-it/)
- [CORS Spring Servidor](https://www.arquitecturajava.com/spring-rest-cors-y-su-configuracion/)
- [Observables](https://medium.com/@mayrarodriguez/conozcamos-los-observables-15ee9e7c5aa9)
- [Metodo Pipe](https://www.tektutorialshub.com/angular/angular-observable-pipe/#:~:text=The%20pipe%20method%20of%20the,or%20as%20an%20instance%20method.)
