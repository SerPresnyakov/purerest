import {indexState} from "./index/State"
import iCrudTableConfig = crud.iCrudTableConfig;

import {table as adGroupTable} from "./tables/adGroups"
import {table as tables} from "./tables/tables"

export const states: iRegister<ng.ui.IState>[] = [
    indexState,
    {
        name: "index.adGroups",
        config: {
            url: "adGroups",
            template: "<ak-crud-table config=\"config\" tmpl=\"'adGroups'\">",
            controller: ["config", "$scope", (config, s) => {
                s['config'] = config
            }],
            resolve: {
                config: (): iCrudTableConfig => adGroupTable
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
                config: (): iCrudTableConfig => adGroupTable
            }
        }
    },
    {
        name: "index.tables",
        config: {
            url: "tables",
            template: "<ak-crud-table config=\"config\">",
            controller: ["config", "$scope", (config, s) => {
                s['config'] = config
            }],
            resolve: {
                config: (): iCrudTableConfig => tables
            }
        }
    },
];