# 05Routing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Routing (Enrutamiento)

En este ejemplo vamos a ver cómo podemos hacer routing o enrutamientos entre nuestros componentes. Recordemos que Angular aplica el concepto de **SPA**, por lo que no tendremos una navegación normal entre páginas web, lo que tendremos será un enrutamiento entre los componentes.

Todos los componentes se mostrarán en la página **index.html**, y se cargaran o se eliminaran de manera dinámica configurando el sistema de rutas de Angular.

## Configurando el Routing en Angular

El routing en angular se gestiona dentro del fichero **app-routing.module.ts** que está dentro de la carpeta **app**. Este fichero es el que se crea cuando generamos una aplicación nueva en angular y nos preguntan si queremos agregar enrutamientos en Angular.

    ? Would you like to add Angular routing? Yes

Dentro de este fichero configuraremos las rutas dentro del array **routes**, con el siguiente formato

    const routes: Routes = [
        {path : 'ruta1', component : Ruta1Component},
        {path : 'ruta2', component : Ruta2Component},
        ....
    ];

Donde **path** será la ruta que pondremos en nuestro navegador y **component** el componente que queremos asignar

## Etiqueta **router-outlet**

Por otro lado, tendremos la etiqueta **router-outlet**, de gran importancia en nuestra aplicación.

    <router-outlet></router-outlet>

En esta etiqueta es donde se mostrarán los componentes que hemos declarado en el array **routes** y en nuestra aplicación.

Si queremos que el contenido de un **router-outlet** cambie con la pulsación de un enlace o un botón le añadimos el atributo **routerLink** e indicamos la ruta (path) asociado al componente que queremos mostrar. Ojo! ¡Estos enlaces no tienen HREF!, si le ponemos un href, el enlace navegará realmente a ese sitio y ya no será una aplicación SPA.

    <button routerLink="/componente1">Ir a Componente 1</button>

Existen otras maneras de establecer el **routerLink**, como mandar información o de manera programática que se verán en los ejemplos.

## Componentes de la aplicación

Para este ejemplo se han creado varios componentes

- cabecera
- menu
- pie-de-pagina
- bienvenida
- componente1

## Visualización del ejemplo.

Dentro de **app.component.html** se han puesto la cabecera, el menú, el router-outlet y el pié de página.

Dentro de **app-routing.module.ts** se han puesto las rutas de la aplicación.

Dentro de los componentes se dan explicaciones del código para entender el funcionamiento.


