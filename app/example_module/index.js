import angular from "angular";

import ExampleCtrl from "./controller/ExampleCtrl";
import ExampleService from "./service/ExampleService";

angular.module("app",[]);
export default angular.module("app").controller("ExampleCtrl",ExampleCtrl).factory("ExampleService",ExampleService).name;
