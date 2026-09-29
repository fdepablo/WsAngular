![Angular](img/angular.png "Angular")

# Angular

Este workspace contiene ejemplos y teoría de Angular actualizados desde el workspace
original de Angular 13. La migración se realiza de forma incremental para conservar
la intención didáctica y todos los comentarios que sigan siendo válidos.

En esta primera etapa se han migrado:

1. **00_TypeScript**, fundamentos de TypeScript.
2. **01_Introduccion**, primera aplicación con la estructura actual de Angular.

## Prerrequisitos

Para trabajar con Angular se recomienda tener conocimientos básicos de:

1. JavaScript.
2. HTML.
3. CSS.
4. TypeScript.

## Node.js y npm

Para trabajar con los ejemplos debemos instalar [Node.js](https://nodejs.org/). Node.js
es un entorno que permite ejecutar JavaScript fuera del navegador. Angular lo utiliza
para ejecutar la CLI, iniciar el servidor de desarrollo, compilar la aplicación y lanzar
las pruebas; no significa que el código de la aplicación vaya a ejecutarse en Node.js,
ya que el resultado de estos ejemplos se ejecuta en el navegador.

La instalación de Node.js incluye normalmente **npm** (*Node Package Manager*). npm es
el gestor de paquetes que descarga y administra las librerías y herramientas declaradas
en `package.json`. Por ejemplo, `npm install` instala las dependencias del proyecto y
`npm start` ejecuta el script configurado para arrancar la aplicación.

Por tanto, normalmente solo necesitamos instalar una versión compatible de Node.js; no
es necesario instalar npm por separado.

## Versiones utilizadas

- Angular y Angular CLI: **22.2.x**.
- TypeScript: **6.0.x**.
- Node.js: **22.22.3 o superior**, **24.15.0 o superior**, o **26.x**.
- npm: la versión incluida con una versión compatible de Node.js.

Podemos comprobar las versiones instaladas con:

    node --version
    npm --version

No es necesario instalar Angular CLI ni TypeScript globalmente. Cada proyecto declara
sus herramientas y versiones en `package.json`, y npm permite ejecutarlas mediante sus
scripts o con `npx`.

## Instalar las dependencias

Cada aplicación Angular de este workspace es un proyecto independiente. Para instalar
sus dependencias debemos entrar en la carpeta del proyecto y ejecutar:

    cd 01_Introduccion
    npm install

La carpeta `node_modules` se crea dentro del proyecto y no se versiona. Mantener una
carpeta por proyecto evita que ejemplos migrados en momentos distintos compartan por
accidente versiones incompatibles.

## Ejecutar una aplicación

Desde la raíz del proyecto Angular:

    npm start

También podemos usar:

    npx ng serve --open

El servidor recompila la aplicación al guardar cambios y actualiza el navegador.
Para detenerlo, pulsaremos **Ctrl+C** en la terminal.

## Compilar y probar

    npm run build
    npm test -- --watch=false

Los proyectos nuevos utilizan el sistema de construcción actual de Angular. Este sistema
se encarga de compilar TypeScript, procesar los estilos, agrupar los archivos y optimizar
el resultado para producción. La CLI realiza este trabajo internamente con herramientas
modernas como esbuild y Vite, por lo que normalmente solo necesitamos ejecutar
`npm start` durante el desarrollo o `npm run build` para generar la aplicación final.

Las pruebas se ejecutan con **Vitest**. Vitest es el entorno que localiza y ejecuta los
ficheros `*.spec.ts`, proporciona funciones como `describe`, `it` y `expect`, y muestra
el resultado de las pruebas. Sustituye en los proyectos nuevos a la combinación de Karma
y Jasmine que utilizaba el workspace original.

El ejemplo inicial también utiliza dos características importantes de la estructura
actual:

- Un componente **standalone** declara directamente los componentes, directivas y pipes
  que necesita mediante su propiedad `imports`. Ya no es obligatorio declararlo dentro
  de un módulo raíz `AppModule` como en versiones más antiguas de Angular.
- Una aplicación **zoneless** no depende de `zone.js` para detectar cualquier operación
  asíncrona del navegador. Angular actualiza las vistas a partir de notificaciones más
  explícitas, como eventos de las plantillas y cambios en signals. Esto reduce trabajo
  innecesario y elimina la necesidad de cargar la dependencia `zone.js`.

## TypeScript

Los ejemplos independientes se encuentran en `00_TypeScript`. Esa carpeta posee su
propio `package.json`; después de ejecutar `npm install` podemos usar el compilador local
con `npx tsc`. Los ficheros JavaScript generados no deben editarse manualmente: se modifica
el fichero TypeScript y se vuelve a compilar.

## Estructura actual

- `00_TypeScript`: ejemplos básicos del lenguaje.
- `01_Introduccion`: primera aplicación con la estructura actual de Angular.
- `img`: imágenes utilizadas por esta documentación.
- `ws_angular.code-workspace`: configuración para abrir el conjunto en Visual Studio Code.

Los demás ejemplos se añadirán conforme avance la migración.

## Editor y extensiones recomendadas

Podemos utilizar cualquier editor con soporte para TypeScript, aunque la documentación
oficial de Angular recomienda Visual Studio Code. Para este workspace recomendamos una
lista pequeña de extensiones:

1. **Angular Language Service** (`angular.ng-template`), mantenida por el equipo de
   Angular. Añade autocompletado, navegación, información de tipos y detección de errores
   dentro de las plantillas HTML. Es la única extensión específica de Angular que
   consideramos imprescindible.
2. **Prettier - Code formatter** (`esbenp.prettier-vscode`). Formatea TypeScript, HTML,
   CSS, JSON y Markdown de manera consistente. Los proyectos incluyen `.prettierrc` y
   una versión local de Prettier, que es la que debe utilizar la extensión.
3. **EditorConfig for VS Code** (`editorconfig.editorconfig`). Aplica automáticamente la
   indentación, el final de línea y otros ajustes declarados en `.editorconfig`.

Al abrir el workspace, Visual Studio Code propondrá estas extensiones porque también
están declaradas en `.vscode/extensions.json`.

**ESLint** puede ser útil para analizar reglas de calidad, pero instalar solamente su
extensión no es suficiente: requiere añadir ESLint y una configuración al proyecto. Se
incorporará más adelante si decidimos definir esas reglas para todo el workspace.

## Bibliografía

- [Documentación oficial de Angular](https://angular.dev/)
- [Compatibilidad de versiones](https://angular.dev/reference/versions)
- [Angular CLI](https://angular.dev/tools/cli)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs/)
- [Documentación de npm](https://docs.npmjs.com/)
