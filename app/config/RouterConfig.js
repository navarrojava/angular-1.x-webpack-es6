//import uiRouter from "angular-ui-router";

function RouterConfig($urlRouterProvider, $stateProvider) {

    console.log("RouterConfig");

    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "./index.html",
            access: "public"

        })
        .state("module2", {
            url: "/module2",
            templateUrl: "./module2.html"
        });
}



export default RouterConfig;