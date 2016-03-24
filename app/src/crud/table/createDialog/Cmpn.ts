import {CrudTableConfig} from "../CrudTableConfig";
import {Helper} from "../Helper";

class Ctrl {

    static $inject = ["config"];

    schema: any;
    from: string;
    res:any;

    constructor(public config: CrudTableConfig) {

        this.schema = Helper.getSchema(config.fields,config.rels)

    }

}

export function getDialog($event: any, config: CrudTableConfig): ng.material.IDialogOptions {
    var parentEl = angular.element(document.body);
    return {
        parent: parentEl,
        template: require<string>("./Template.html"),
        controller: Ctrl,
        controllerAs: "vm",
        clickOutsideToClose: true,
        locals: {
            config: config
        },
        targetEvent: $event
    }
}

