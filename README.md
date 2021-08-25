# ReactiveApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Enumération du problème

Lorsque je clique sur un élément du tableau, celui-ci s'ajoute bien dans la liste.
Mais à l'utilisation plusieurs problèmes apparaissent :
    - Les affaires peuvent apparaitre plusieurs fois dans la liste.
    - Si l'on clique sur une affaire de la liste, celle-ci devrait être supprimé, mais ce n'est pas le cas.
    - Après avoir essayé de supprimer une affaire de la liste, la liste ne s'actualise plus.

Nous allons voir comment corriger rapidement celà avec RxJS.
