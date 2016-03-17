
import {Deps} from "./Deps";
import {Config} from "./Config";
import {indexState} from "./index/State"

const module = angular.module("app", [
    Deps.material,
    Deps.uiRouter
]);

Config.registerStates(module.name, [
    indexState
]);

module.config(Config);