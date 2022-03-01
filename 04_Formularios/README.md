# 04Formularios

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Formularios

Los formularios es la via principal por la que un usuario se comunicará con nuestra aplicación.

Para trabajar con formularios en Angular debemos de configurar nuestra aplicación mediante el Two Way Binding que vimos anteriormente.

## Two Way Binding (TWB)

Mediante el TWB podemos enviar información desde el HTML hacia los componentes y viceversa. Es una combinación de las dos anteriores y muy útil para trabajar con formularios.

Para ello primero debemos de configurar nuestro <b>app.module.ts</b> para importar un nuevo módulo a nuestro proyecto. Dentro del fichero debemos de importar el módulo **FormsModule** dentro del decorador **NgModule**.

Una vez configurado, podemos empezar a aplicar el concepto de TWB como una mezcla de los dos anteriores, para ello debemos de usar una combinación de los anteriores operadores **[(ngModel)]**

## Desarrollo del ejemplo

En este ejemplo vamos a desarrollar una funcionalidad CRUD en angular por medio de un formulario. Para ello vamos a crear una Entidad **heroe.ts** y un componente **heroes.component.ts**.
