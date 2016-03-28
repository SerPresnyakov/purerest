import {indexState} from "./index/State"

import {table as adGroupTable} from "./tables/adGroups"
import {table as tables} from "./tables/tables"
import {table as clients} from "./tables/leviafan/client"
import {CrudTableConfig} from "./crud/table/CrudTableConfig";
import {loginState} from "./auth/login/loginState";
export const states: IRegisterMeta<ng.ui.IState>[] = [
    indexState,
    loginState,
    {
        name: "index.adGroups",
        config: {
            url: "adGroups",
            template: "<ak-crud-table config=\"config\" tmpl=\"'adGroups'\">",
            controller: ["config", "$scope", (config, s) => {
                s['config'] = config
            }],
            resolve: {
                config: (): CrudTableConfig => adGroupTable
            }
        }
    },
    {
        name: "index.adGroups2",
        config: {
            url: "adGroups2",
            template: "<ak-crud-table config=\"config\">",
            controller: ["config", "$scope", (config, s) => {
                s['config'] = config
            }],
            resolve: {
                config: (): CrudTableConfig => adGroupTable
            }
        }
    },
    {
        name: "index.clients",
        config: {
            url: "clients",
            template: "<ak-crud-table config=\"config\">",
            controller: ["config", "$scope", (config, s) => {
                s['config'] = config
            }],
            resolve: {
                config: (): CrudTableConfig => clients
            }
        }
    },


];