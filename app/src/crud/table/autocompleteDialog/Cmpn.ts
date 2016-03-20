class Ctrl {

    static $inject = ["field", "origin", "$http", "event", "rel"];

    selectedItem: any;
    searchText: string;

    constructor(
        public field: crud.iField,
        public origin: any,
        public $http: ng.IHttpService,
        public $event: ng.IAngularEvent,
        public rel: crud.iRel
    ) {
        var alex = "1"
    }

    querySearch(text: string): ng.IPromise<any[]> {

        var asd = 1;

        return this.$http.get(this.rel.dao, {
            params: {
                filter: `name_like_${text}`
            }
        }).then((res: any) => res.data)

    }

}

export const getDialog = (event: ng.IAngularEvent, field: crud.iField, origin: any, rel: crud.iRel) => {
    return {
        bindToController: true,
        controllerAs: "ctrlVM",
        controller: Ctrl,
        targetEvent: event,
        template: require<string>("./Template.html"),
        locals: {
            field: field,
            origin: origin,
            event: event,
            rel: rel
        }
    }
};