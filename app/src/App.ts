
import {Deps} from "./Deps";
import {Config} from "./Config";
import {indexState} from "./index/State"
import {Run} from "./Run";

const module = angular.module("app", [
    Deps.material,
    Deps.uiRouter
]);

Config.registerStates(module.name, [
    indexState,
    {
        name: "index.first",
        config: {
            url: "first",
            template: "firstState!"
        }
    },
    {
        name: "index.second",
        config: {
            url: "second",
            template: "secondState!"
        }
    },
]);

module.run(Run);

module.config(Config);