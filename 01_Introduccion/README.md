# Conceptos de Angular

La unidad básica de una aplicación Angular es el **componente**. Un componente se define
mediante una clase TypeScript decorada con `@Component` y suele tener asociadas una
plantilla HTML y una hoja de estilos CSS.

Los componentes actuales son **standalone** por defecto. Un componente standalone declara
directamente en su propiedad `imports` los componentes, directivas y pipes que utiliza.
Por ello, una aplicación nueva ya no necesita organizar sus componentes dentro de un
`AppModule` o de otros `NgModule`.

Angular continúa admitiendo NgModules para mantener aplicaciones anteriores, pero este
workspace utiliza la arquitectura recomendada para desarrollo nuevo.

También encontraremos **servicios**, cuya función es compartir lógica o proporcionar
datos a los componentes. Hablaremos de estos elementos con más profundidad en ejemplos
posteriores.

## Creación de este proyecto

Este proyecto se ha creado con la versión de Angular CLI indicada en el README principal,
mediante un comando equivalente a:

    npx @angular/cli new 01_Introduccion --routing --style css --standalone --zoneless

La opción `--routing` prepara el enrutamiento, aunque en este primer ejemplo todavía no
se han definido rutas. `--style css` selecciona CSS para los estilos. Las otras opciones
indican que la aplicación usa componentes standalone y el modo zoneless actual.

## Composición de un proyecto Angular

1. Los ficheros de la raíz contienen la configuración general:

   - `angular.json`: configuración de construcción, servidor y pruebas.
   - `package.json`: scripts y versiones de las dependencias.
   - `package-lock.json`: versiones exactas instaladas para que todos podamos reproducir
     la misma instalación.
   - `tsconfig.json`: configuración de TypeScript y del compilador de Angular.

2. Los directorios que empiezan por punto contienen configuración del editor o de las
   herramientas. Normalmente no se modifican al crear componentes.

3. La carpeta `src` contiene el código de la aplicación:

   - `index.html`: documento HTML inicial que contiene la etiqueta `<app-root>`.
   - `styles.css`: estilos globales.
   - `main.ts`: punto de entrada que arranca el componente raíz mediante
     `bootstrapApplication`.
   - `app`: componentes y configuración de la aplicación.

4. La carpeta `public` contiene recursos estáticos que se copian sin transformar, como
   el icono de la aplicación.

5. La carpeta `node_modules` contiene las dependencias instaladas con npm. Se genera con
   `npm install`, permanece dentro de este proyecto y no se guarda en Git. Podemos
   eliminarla y reconstruirla sin perder código.

6. Las carpetas `dist` y `.angular` también son generadas por las herramientas. `dist`
   contiene el resultado de la compilación y `.angular` contiene caché local. No debemos
   editar ni guardar ninguna de las dos en Git.

El componente inicial se reparte entre:

- `src/app/app.ts`: clase y decorador del componente.
- `src/app/app.html`: plantilla.
- `src/app/app.css`: estilos del componente.
- `src/app/app.spec.ts`: pruebas unitarias con Vitest y las utilidades de Angular.
- `src/app/app.config.ts`: proveedores globales de la aplicación.
- `src/app/app.routes.ts`: rutas de la aplicación.

## Cómo arranca la aplicación

El arranque sigue estos pasos:

1. El navegador carga `src/index.html`, que contiene la etiqueta `<app-root>`.
2. `src/main.ts` llama a `bootstrapApplication` y le entrega la clase `App` junto con la
   configuración global de `app.config.ts`.
3. Angular encuentra que el selector de `App` es `app-root` y muestra su plantilla dentro
   de la etiqueta `<app-root>`.
4. `app.config.ts` registra los proveedores disponibles para toda la aplicación. En este
   ejemplo configura el tratamiento global de errores y el router.

Este arranque sustituye al antiguo `platformBrowserDynamic().bootstrapModule(AppModule)`.

## Arrancar la aplicación

Después de instalar las dependencias:

    npm install
    npm start

Para abrir automáticamente el navegador podemos ejecutar:

    npx ng serve --open

Los cambios se recompilan automáticamente mientras el servidor está activo.
Para detenerlo, pulsaremos **Ctrl+C** en la terminal.

La instalación solo es necesaria la primera vez o cuando cambie `package.json`. En las
siguientes sesiones podemos ejecutar directamente `npm start` mientras conservemos la
carpeta `node_modules`.

## Compilar y probar

Para crear una versión optimizada de la aplicación:

    npm run build

El resultado se genera dentro de `dist`. Para ejecutar una vez las pruebas unitarias sin
dejar Vitest observando cambios:

    npm test -- --watch=false

El fichero `src/app/app.spec.ts` comprueba que el componente pueda crearse y que la
interpolación muestre los datos esperados.

## Cambiando nuestra aplicación

La plantilla `src/app/app.html` utiliza interpolación para mostrar atributos de la clase:

    <span>Mi primera APP en Angular se llama {{ titulo }}</span>

En `src/index.html` encontramos `<app-root>`. Esta etiqueta corresponde al selector
declarado en el decorador `@Component` de `src/app/app.ts`.

Cuando Angular evalúa `{{ titulo }}`, busca la propiedad `titulo` en la instancia de la
clase `App` y escribe su valor en el HTML. La misma regla se aplica a `nombre` y `edad`.
Si cambia una de esas propiedades mediante una interacción gestionada por Angular, la
vista puede actualizarse con el nuevo valor.

## Diferencias importantes respecto a Angular 13

- No existen `app.module.ts` ni `app-routing.module.ts`.
- El arranque utiliza `bootstrapApplication`.
- Los componentes son standalone por defecto.
- El proyecto usa el builder moderno `@angular/build:application`.
- Las pruebas nuevas usan Vitest en lugar de Karma.
- El modo zoneless es el predeterminado y no se instala Zone.js.
- Los nombres generados se simplifican a `app.ts`, `app.html` y `app.css`.

## Bibliografía

- [Componentes Angular](https://angular.dev/guide/components)
- [Arranque con bootstrapApplication](https://angular.dev/api/platform-browser/bootstrapApplication)
- [Estructura de un workspace](https://angular.dev/reference/configs/file-structure)
