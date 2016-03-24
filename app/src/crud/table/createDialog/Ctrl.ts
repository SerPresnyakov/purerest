export class Ctrl {

    static $inject = [ "$http", "$scope"];

    selectedItem: any;
    searchText: string;


    constructor(
        public $http: ng.IHttpService,
        public scope

    ) {
        scope.querySearch= (text: string) =>{
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
        }

    }


    finish($event){

    }
}