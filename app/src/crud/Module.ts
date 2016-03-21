import {CrudTableDirective} from "./table/CrudTableCmpn"
import {Deps} from "../Deps";

const module = angular.module("restCrud", [
    Deps.material,
    Deps.mdTable,
]);

module.directive("akCrudTable", ["$compile", ($compile => CrudTableDirective($compile))]);

export default module.name