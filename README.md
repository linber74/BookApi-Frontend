# BookApi – Frontend

Angular 20-applikation för LIA-testet hos RedRiver Consulting. Responsiv CRUD-applikation med JWT-tokenhantering, Bootstrap-styling och Font Awesome-ikoner.

## Funktioner
- CRUD för böcker (lista, lägg till, redigera, radera)
- Egen sida "Mina citat" – CRUD på citat, kopplat till inloggad användare
- Registrering och inloggning med JWT-tokenhantering
- Responsiv design (desktop, surfplatta, mobil)
- Ljust/mörkt tema-toggle

## Teknikstack
- Angular 20
- Bootstrap 5
- Font Awesome
- RxJS

Kräver att [backend](https://github.com/linber74/BookApi-Backend) körs samtidigt (standard: `http://localhost:5004`).

## Relaterat repo
Backend: [BookApi-Backend](https://github.com/linber74/BookApi-Backend)

---

# BookAppFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.36.

## Development server

To start a local development server, run:

    ng serve

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

    ng generate component component-name

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

    ng generate --help

## Building

To build the project run:

    ng build

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io/) test runner, use the following command:

    ng test

## Running end-to-end tests

For end-to-end (e2e) testing, run:

    ng e2e

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
