import {CrudTableCmpn} from "./table/CrudTableCmpn"
import {Deps} from "../Deps";

const module = angular.module("restCrud", [
    Deps.material,
    Deps.mdTable,
]);

module.component("akCrudTable", CrudTableCmpn);

export default module.name