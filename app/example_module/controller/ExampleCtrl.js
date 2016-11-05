/*//import  ExampleService from './service/ExampleService';
 import angular from 'angular';

 function ExampleCtrl(ExampleService) {
 //this.alertAnything = this.alertAnything.bind(this);
 this.name = 'Navarro';

 let _alertAnything = function () {

 //alert('Hi, from es6 with Angular');
 console.log('ExampleController');
 ExampleService.testApi();

 };

 return {
 alertAnything: _alertAnything
 }
 }

 //ExampleCtrl.$inject = ['ExampleService'];
 export default  ExampleCtrl;*/

/* global console*/
class ExampleCtrl {
    constructor(http, exampleService, scope) {
        this.http = http;
        //this.alertAnything = this._alertAnything;
        this.ExampleService = exampleService;
        this.name = 'Navarro';
        this.foo = 'foo';
        this.scope = scope;
        //this.scope.$watch(() => this.name, (newValue,oldValue) => this.name = '$watch');
        this.watcher = this.watcher();
    }

    alertAnything() {

        //alert('Hi, from es6 with Angular');
        console.log('ExampleController');
        this.ExampleService.testApi();
    };

    watcher() {
        this.scope.$watch(() => this.name, (newValue, oldValue) => console.log('Watch !!!'));
        this.scope.$watch(() => this.foo, (newValue, oldValue) => console.log(newValue));
    }

    static fact(http, exampleService, scope) {
        return new ExampleCtrl(http, exampleService, scope);
    }
}

ExampleCtrl.fact.$inject = ['$http', 'ExampleService', '$scope'];

export default ExampleCtrl.fact;
