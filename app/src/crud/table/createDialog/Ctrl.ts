import {Helper} from "../../../common/Helper";
export class Ctrl {

    static $inject = [ "$http", "$scope", "Restangular" ];

    selectedItem: any;
    searchText: string;

    constructor(
        public $http: ng.IHttpService,
        public scope,
        public rest: restangular.IService

    ) {
        console.log(scope.options.data.dao);
        console.log(scope.options.data.rest);
        scope.querySearch = (text: string) => {
            return this.$http.get(scope.options.data.dao, {
                params: {
                    filter: `name_like_${text}`,
                    token: `1:god`
                }
            }).then((res: any) => res.data.data);
        };

        scope.selectedItemChange = (item) =>{
            console.log("chaneged");
            if(item) {
                scope.model[scope.options.key] = item.id
            }
            else{
                scope.model[scope.options.key] = "";
            }
        };

        scope.options.resetModel = () => {
            Helper.nullObj(scope.model);
            scope.searchText = "";
        };

    }


    finish($event){

    }
}