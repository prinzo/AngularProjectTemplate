(function () {
    "use strict";

    angular
        .module("myApp.api", ["ngResource"])
        .constant("appSettings", {
            serverPath: "pathToApi"
        });

}());