class Ctrl {

    static $inject = ["field", "origin", "$http"];

    selectedItem: any;
    searchText: string;

    bla = 1;

    constructor(
        public field: crud.Field,
        public origin: any,
        public $http: ng.IHttpService
    ) {
        var alex = "1"
    }

    query(text: string): ng.IPromise<any[]> {

        var asd = 1;

        return this.$http.get(this.field.rel.dao, {
            params: {
                filter: `name_like_${text}`
            }
        }).then((res: any) => res.data)

    }

}

export const getDialog = (event: ng.IAngularEvent, field: crud.Field, origin: any) => {
    return {
        bindToController: true,
        controllerAs: "vm",
        controller: Ctrl,
        targetEvent: event,
        template: require<string>("./Template.html"),
        locals: {
            field: field,
            origin: origin
        }
    }
};