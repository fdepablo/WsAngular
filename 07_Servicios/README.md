# 07Servicios

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

# Servicios en Angular

Básicamente un **servicio** es un proveedor de datos, que mantiene lógica de acceso a ellos y la funcionalidad relacionada con el negocio. Normalmente son los encargados de conectar con la parte de Backend, como puede ser un servicio REST.

Al centralizar toda la lógica de acceso a datos en un servicio, los demás componentes podrán usarlo para acceder a la información, centralizando el acceso en toda la aplicación. Dicho de otra manera, los servicios serán consumidos por los componentes, que delegarán en ellos la responsabilidad de acceder a la información y las operaciones sobre ellos.

Los componentes no deberían buscar ni guardar datos directamente. Deben centrarse en presentar datos y delegar el acceso a los datos a un servicio.

Los componentes **NUNCA** deben crear los servicios, es el propio Angular el encargado de crearlos y dejarlos preparados para pasárselos a los componentes que los necesiten mediante la **inyección de dependencias**

## Inyección de dependencias (ID)

La **inyección de dependencias (ID)** o en inglés **Dependency Injection (DI)** es un patrón de diseño orientado a objetos, en el que se suministran objetos a una clase en lugar de ser la propia clase la que cree dichos objetos. Nuestras clases no crean los objetos que necesitan, sino que se los suministra otra clase 'contenedora' que inyectará el objeto deseado.

## Servicios e inyección de dependencias

Una de las principales maneras que tiene Angular de implementar la ID es mediante los **servicios**.

La ID de Angular proporciona dependencias a la clase que los necesite. Mediante la ID en Angular incrementamos la flexibilidad y la modularidad de nuestras aplicaciones.

## Generar servicios con la CLI de Angular

Los servicios es una clase que debe de tener el decorador **@Injectable** para que sean registrados por Angular de manera automática. Una vez registrado, podremos suministralo a los componentes que lo necesiten. 

Para generar un servicio en Angular de manera automática, debemos de usar el siguiente comando.

    ng generate service NOMBRE_DEL_SERVICIO

O el equivalente

    ng g s NOMBRE_DEL_SERVICIO

Se recomienda generar los servicios en carpetas diferentes a los componentes

    ng g s CARPETA\NOMBRE_DEL_SERVICIO

En este ejemplo ejecutamos el siguiente código.

    ng g s servicios\heroe

Cuando creamos un servicio mediante la CLI de Angular, se nos generan 2 ficheros:

    NOMBRE_DEL_SERVICIO.service.ts
    NOMBRE_DEL_SERVICIO.service.spec.ts

El fichero 'spec' se puede eliminar si no vamos a hacer pruebas unitarias con el servicio.

## Visualización del ejemplo

En este caso vamos a realizar el ejemplo 04_Formulario, pero con servicios y lo aprendido en el ejemplo 06_ComunicacionComponentes. El servicio será el encargado de llevar el acceso a datos de la aplicación, mientras que los componentes se limitarán a comunicarse con las plantillas y lo servicios.

Vamos a tener los siguientes componentes

1. cabecera, muestra una cabecera de la página.
2. pie-de-pagina, muestra el pie de página.
3. heroes, se encarga de mostrar el formulario e interactuar con el servicio de heroes.
4. heroe, se encarga de pintar cada una de los heroes.

También la entidad "heroe" y el servicio "heroe"

## Bibliografía

- <https://angular.io/guide/dependency-injection>
- <https://es.wikipedia.org/wiki/Inyecci%C3%B3n_de_dependencias>

