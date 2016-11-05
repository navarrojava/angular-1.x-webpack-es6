
import * as files from "./htmlImports";
import angular  from "angular";

let document = window.document;

import app from "./example_module";
import RouterConfig from "./config/RouterConfig";
import  uiRouter from "angular-ui-router";

angular.module("example",[app,uiRouter]).config(RouterConfig);
function start(){
    return angular.bootstrap(document, ["example"]);
}

window.onload = function() {
    console.log("OnLoad");
    start();
};




/*
import * as files from "./htmlImports"
import angular  from "angular";

let document = window.document;

import app from "./example_module";
import RouterConfig from "./config/RouterConfig";
import * as uiRouter from "angular-ui-router";

angular.module("example",["app","ui.router"]).config(RouterConfig);

function start(){
   return angular.bootstrap(document, ["example"]);
}

angular.module("example").$inject = ["ui.router"];

window.onload = function() {
 console.log("OnLoad");
 start();
};
*/

