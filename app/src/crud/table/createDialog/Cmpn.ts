import {CrudTableConfig} from "../CrudTableConfig";
import {Helper} from "../Helper";

class Ctrl {

    static $inject = [ "config", "$http" ];

    schema: any;
    from: string;
    res:any;
    url;

    constructor(public config: CrudTableConfig, public $http:ng.IHttpService) {

        this.schema = Helper.getSchema(config.fields, config.rels, config.rest);
        this.url = config.url;
        console.log(this.url);
        this.$http.get("left/pricelab/shop?filter=clientId_eqN_1&page=1&per=10").then((res) => console.log(res))
    }

    submit(){
        return this.$http.post(this.url,this.res,{params:{token:"1:god"}})
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

