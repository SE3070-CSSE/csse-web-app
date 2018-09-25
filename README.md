# CsseWebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.
For Angular docs and tutorials see the [Angular reference](https://angular.io/)

## Development

### Running the Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Logging

A logger has been integrated into the project. To set upp logging in a component, 
 - import the service `import { ToastrService } from 'ngx-toastr';`
 - inject it using the component's constructor `constructor(private toastr: ToastrService) { }`
 - call the log methods on the logger 
     ```
     this.toastr.success('some success message');
     this.toastr.error('some error message');
     ```

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
