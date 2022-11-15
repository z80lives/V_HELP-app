# VHELPApp

![nodejs-ci](https://github.com/z80lives/V_HELP-app/actions/workflows/build.yml/badge.svg)

This repository contains the web application we created as part of our coursework. This application will not work properly without the [backend service](https://github.com/z80lives/V_HELP-app). Please refer to the README file of that project in order to set it up. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Project Scope
The web application that we will develop can be used by the public to register  either a school or a volunteer. School administrators can use the system to register themselves and their schools in the system. The administrator can then submit requests for tutorials or resources on behalf of their school. Please note that each school administrator can represent a single school, however a school can have many school administrators.
 
Once a request for resource has been submitted, volunteers can view these resources and submit an offer to a request. Later on, the school administrators can review the offers they have received for the requests made on behalf of their school and may choose to select one offer and accept this offer. The school administrators may also choose to close the offer if the offer is not suitable. In a nutshell, the core functionality of the whole system is to submit and track these “Offers” and care must be taken to design and develop in a user friendly fashion.

This specific repository contains the web application (frontend) of the proposed system.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
