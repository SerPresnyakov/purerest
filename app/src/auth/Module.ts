
import {AngularModule} from "../common/AngularModule"
import {AuthService} from "./AuthService";
import {Run} from "./Run";
import {Config} from "./Config";
import {loginState} from "./login/loginState";
import {Deps} from "../Deps";

let module = new AngularModule("major.auth", [
    Deps.localStorage,
    Deps.uiRouter,

]);

module.config(Config);
module.run(Run);

module.registerServices([{name: AuthService.serviceName, config: AuthService}]);

export default module.getModuleName();
