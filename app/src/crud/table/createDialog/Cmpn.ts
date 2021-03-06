import {CrudTableConfig} from "../CrudTableConfig";
import {Helper} from "../Helper";
import IDialogService = angular.material.IDialogService;

class Ctrl {

    static $inject = [ "config", "$http", "$mdDialog" ];

    schema: any;
    from: string;
    res:any;
    url;

    constructor(public config: CrudTableConfig, public $http:ng.IHttpService, public $mdDialog:IDialogService) {

        this.schema = Helper.getSchema(config.fields, config.rels, config.rest);
        this.url = config.url;
        console.log(this.url);
        this.$http.get("left/client?page=1&per=15",{
            headers: {
                token: `1:6273543320`
            }
        }).then((res) => console.log(res))
    }

    submit(){
        return this.$http.post(this.url,this.res,{headers: {
            token: `1:6273543320`
        }}).then((res)=>{
            if(res){
                this.$mdDialog.hide()
            }

        })
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

