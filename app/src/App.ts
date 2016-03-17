
import {Deps} from "./Deps";
import {Config} from "./Config";
import {indexState} from "./index/State"

const module = angular.module("app", [
    Deps.material,
    Deps.uiRouter,
    Deps.sidenav
]);

Config.registerStates(module.name, [
    indexState
]);

module.run(["ssSideNav", "$rootScope","$timeout", (nav, $rootScope,$timeout) => {
    $rootScope.menu = nav;

}]);

module.config(Config);