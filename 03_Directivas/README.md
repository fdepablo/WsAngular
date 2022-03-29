# 03Directivas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Directivas en Angular

Las directivas son partes muy importantes dentro del nucleo de Angular. Las Directivas sirven para extender la funcionalidad del HTML usando para ello una nueva sintaxis.

Hay tres tipos de directivas en Angular:

1. **Directivas de componentes**. Son directivas con un template o plantilla(HTML), como pueden ser los componentes vistos hasta ahora. Los componentes tienen el decorador **@Component** que extiende del decorador **@Directive**, agregando caracteristicas propias. Ya hemos trabajado con este tipo de directivas en temas anteriores y son las más comunes de las tres.
2. **Directivas estructurales**. Cambian el DOM del navegador agregando y eliminando los elementos del mismo. Por ejemplo tenemos la directiva **NgFor** que sirve para iterar, o la directiva **NgIf** que sirve de condicional.
3. **Directivas de atributo**. Cambian la apariencia o comportamiento de un elemento, componente u otra directiva, por ejemplo la directiva de atributo **[ngModel]** que hemos visto anteriormente

En este proyecto nos vamos a centrar en las **directivas estructurales**.

## Directivas estructurales

Estas directivas van como atributo dentro de las etiquetas HTML. Van precedidas por <b>*</b> (asterisco).

Entre las directivas estructurales más importantes podemos encontrar las siguientes:

1. **ngIf**. Sirve para agregar contenido a una plantilla basándose en una condición. Si la condición es verdadera, se mostrará el contenido, si es falsa no lo hará. En caso de no mostrar el elemento, **NO** lo agregaría al arbol DOM. La sintaxis sería la siguiente:

        <div *ngIf="CONDICION_VERDADERA">
            Mostramos este div
            Este div está en el arbol DOM
        </div>
        <div *ngIf="CONDICION_FALSA">
            NO mostramos este div
            Este div NO está en el arbol DOM
        </div>

    Nótese que la etiqueta puede ser **div** o la que ser requiera (p,h1, etc.)

    Tambien podemos hacer una estructura **if-else**, utilizando una etiqueta propia de angular **ng-template** para el caso **else**

        <div *ngIf="condition; else elseBlock">Contenido si es true</div>
        <ng-template #elseBlock>Contenido si es false</ng-template>


2. **ngswitch**. Esta directiva es parecida a la **ngIf** pero en este caso podemos evaluar varias condiciones. Es como el **switch** de java o de otros lenguajes de programación.

        <container-element [ngSwitch]="switch_expression">
            <some-element *ngSwitchCase="match_expression_1">...</some-element>
            <some-element *ngSwitchCase="match_expression_2">...</some-element>
            ...
            <some-element *ngSwitchDefault>...</some-element>
        </container-element>

3. **ngfor**. Esta directiva nos permite iterar listas de datos en las plantillas. La sintaxis sería la siguiente:

        <li *ngFor="let item of items; index as i">...</li>

    **items** seria la lista a iterar (array), **item** sería cada uno de los elementos del array.

    La segunda parte sería optativa **"index as i"**. Podemos encontrar **index** que sería en índice de la lista, e **i** que sería la variable donde vamos a almacenar el índice para usarlo dentro de la etiqueta.

En este proyecto vamos a ver ejemplos de estos tres tipos de directivas estructurales.

## Bibliografía

- <https://javadesde0.com/introduccion-a-las-directivas-y-tipos-de-directivas-en-angular/>
- <https://medium.com/notasdeangular/directivas-en-angular-efb8a8cf78e0>
- <https://www.acontracorrientech.com/directives-en-angular-guia-practica/>



