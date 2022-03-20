# 02Componentes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Componentes en Angular

Los componentes en Angular forman la estructura de datos (bloques) de las aplicaciones.

Los **componentes** son elementos reutilizables que esta compuesto por:

1. Un archivo que será nuestra plantilla, ejemplo **app.component.html** (HTML), es decir, la vista o en términos más simples lo que vas a ver en la página.
2. Un archivo para el CSS, donde incluiremos los estilos. Ejemplo **app.component.css**.
3. Un archivo de lógica, la cual es la que pondremos en un archivo .ts, ejemplo **app.component.ts**. En este archivo se definiran los dos archivos anteriores que se van a usar (HTML y CSS), y además llevará toda la funcionalidad de la página.

Además, los **componentes** tienen las siguientes propiedades:

1. Los componentes definen vistas, es decir, son un conjunto de elementos que se mostrarán en el navegador y que Angular puede modificar de acuerdo a la lógica y a los datos.

2. Los componentes usan servicios, que proporcionan una funcionalidad que no está directamente relacionada con las vistas. Los servicios son los que se conectan con los servidores para acceder a la información (como puede ser un servicio REST).

El decorador **@Component()** identifica la clase inmediatamente debajo de ella como un componente, y proporciona la plantilla y los metadatos específicos del componente relacionado. 

Los decoradores son funciones que modifican las clases de JavaScript. Angular define una serie de decoradores que adjuntan tipos específicos de metadatos a las clases, para que el sistema sepa qué significan esas clases y cómo deberían funcionar.

La información que podemos establecer en el decorador de un componente es:

1. Un selector que define el nombre del componente. Este nombre será usado como etiqueta en los ficheros HTML para insertar una instancia del mismo
2. Una plantilla HTML que da las instrucciones a Angular de como renderizar el componente.
3. Opcionalmente podemos dar una hoja de estilos CSS para la plantilla HTML

## Ficheros de un componente

Los componentes se encuentran debajo de la carpeta **app** y se componen de los siguientes ficheros

1. **NOMBRE.component.css**. Los estilos del componente en CSS
1. **NOMBRE.component.html**. La estructura del componente en HTML
1. **NOMBRE.component.specs.ts**. Fichero para pruebas unitarias
1. **NOMBRE.component.ts**. La declaración del componente, donde se declara la clase y el decorador @Component. Lleva toda la lógica del componente y haría funciones de controlador dentro del MVC del cliente.

## Creación de un componente

Para crear un componente suele hacerse a partir de la CLI de angular

    ng generate component NOMBRE_COMPONENTE

o de manera simplificada

    ng g c NOMBRE_COMPONENTE

A parte de generar el fichero con el nombre del componente justo debajo de la carpeta **app**, también modifica el fichero **app.module.ts** para notificar a Angular de la existencia del componente

Si tenemos instalados los plugins de Angular, VSC nos daría la opción al pulsar botón derecho sobre la carpeta que queramos.

Para borrar un componente en angular debemos de hacerlo a mano, para ello:

1. Eliminar la carpeta donde se ha creado nuestro componente.
2. Eliminar las referencias del componente del fichero **app.module.ts**, el "import" del componente y la declaración del componente.

En este ejemplo se van a crear los siguientes componentes

- listado-personas
- cabecera
- pie-de-pagina

## Mostrando los componentes a nuestros usuarios

Una vez creados los componentes, los debemos de incluir en el fichero **app.component.html** dentro de la carpeta **app**. En este fichero podremos colocar los componentes como queramos, aplicando las reglas de estilo que estimemos.

## Property Binding (PB)

PB en Angular nos ayuda a enlazar valores a propiedades de elementos HTML o a directivas, y de esta manera, poder cambiar valores de manera dinámica. Algunos ejemplos pueden ser habilitar o deshabilitar botones o poner rutas a nivel programático.

PB ayudan a mover valores en una dirección, desde la propiedad de un componente hasta la propiedad del elemento (por ejemplo HTML).

Para enlazar a una propiedad de un elemento, envolvemos la propiedad con corchetes **[]**, de esta manera identificamos dicha propiedad como "target property". Ejemplo en HTML:

    <img [src]="urlImagen">

En este caso estamos diciendo que la propiedad **src** la vamos a obtener de una propiedad llamada **urlImagen** del componente.

## Event Binding (EB)

Mediante EB podemos escuchar los eventos de nuestro HTML.

Si trabajamos con JS los nombres de los eventos empiezan **con la palabra on** como puede ser **onclick**, en Angular si queremos hacer EV, los eventos deben empezar **sin la palabra on** y entre parentesis, como puede ser **(click)**. Una vez declarado el EV lo igualaremos al método del componente que queramos.

## Two Way Binding (TWB)

Mediante el TWB podemos enviar información desde el HTML hacia los componentes y viceversa. Es una combinación de las dos anteriores y muy útil para trabajar con formularios.

Para ello primero debemos de configurar nuestro **app.module.ts** para importar un nuevo módulo a nuestro proyecto. Dentro del fichero debemos de importar el módulo **FormsModule** dentro del decorador **NgModule**.

Una vez configurado, podemos empezar a aplicar el concepto de TWB como una mezcla de los dos anteriores, para ello debemos de usar la directiva **[(ngModel)]**