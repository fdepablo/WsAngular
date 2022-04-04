# 04Formularios

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Formularios

Los formularios es la via principal por la que un usuario se comunicará con nuestra aplicación. El objetivo de este ejemplo es hacer una funcionalidad CRUD de la entidad Heroe con ayuda de un formulario. No se van a aprender conceptos nuevos, si no un ejemplo más completo sobre lo visto anteriormente.

Para trabajar con formularios en Angular debemos de configurar nuestra aplicación mediante el Two Way Binding que vimos anteriormente en el ejemplo **02_Componentes**.

Para ello, primero debemos de configurar nuestro **app.module.ts** para importar un nuevo módulo a nuestro proyecto. Dentro del fichero debemos de importar el módulo **FormsModule** dentro del decorador **NgModule**.

Una vez configurado, podemos empezar a aplicar el concepto de TWB con la directiva **[(ngModel)]**

    <input type="text" [(ngModel)]="propiedad"/>

## Desarrollo del ejemplo

Para este ejemplo, vamos a crear una Entidad **heroe.ts** y un componente **heroes.component.ts**. Tanto la entidad como el componente se crearan en diferentes carpetas por motivos de organización de código (carpeta "entidades" y "componentes" respectivamente).


## Bibliografia

- [Saber que elemento HTML ha desencadenado un evento](https://stackoverflow.com/questions/36006894/angular2-get-clicked-element-id)