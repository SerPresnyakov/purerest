import {Deps} from "./Deps";
import {Config} from "./Config";
import {Run} from "./Run";
import {states} from "./States";
import CrudModule from "./crud/Module"
import {AngularModule} from "./common/AngularModule";
import AuthModule from "./auth/Module"

const module = new AngularModule("app", [
    Deps.uiRouter,
    Deps.localStorage,
    CrudModule,
    AuthModule,
    Deps.formly
]);

module.registerStates(states);

module.run(Run);

module.config(Config);
