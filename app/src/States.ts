import {indexState} from "./index/State"
import iCrudTableConfig = crud.iCrudTableConfig;

import {resourceTable} from "./configs"

export const states: iRegister<ng.ui.IState>[] = [
    indexState,
    {
        name: "index.first",
        config: {
            url: "first",
            template: "asd<ak-crud-table config=\"config\">",
            controller: ["config", "$scope", (config, s) => {
                s['config'] = config
            }],
            resolve: {
                config: (): iCrudTableConfig => resourceTable
            }
        }
    },
    {
        name: "index.second",
        config: {
            url: "second",
            template: "secondState!"
        }
    },
];