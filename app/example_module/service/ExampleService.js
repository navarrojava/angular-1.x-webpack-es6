/*
"use strict";
import angular from "angular";
function ExampleService($http) {
    var _this = this;
    $http.defaults.useXDomain = true;
    _this.http = $http;

    _this.testApi = function () {
        const headers = {
            "Content-Type": "text/css",
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json"
    };
        return _this.http({
                method: "GET",
                url: "https://www.google.com"
                //url: "https://neutrinoapi-user-agent-info.p.mashape.com/user-agent-info",
                //headers: headers
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };

    return {
        testApi: _this.testApi
    };
}

//ExampleService.$inject = ["$http"];
export default  ExampleService;
*/



/*global $log*/
class ExampleService {

    constructor(http){
        this.http = http;
    }

    testApi () {
        $log("ExampleService");
        return this.http({
                method: "GET",
                url: "http://localhost:9090/api/i18n?lang=pt"
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    }

    static fact(http){
        return new ExampleService(http);
    }
}

ExampleService.fact.$inject = ["$http"];
export default  ExampleService.fact;
