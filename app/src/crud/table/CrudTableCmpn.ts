
import {Pager} from "../source/Pager";
import {Page} from "../source/Page";
import {Source} from "../source/Source";
import iCrudTableConfig = crud.iCrudTableConfig;

class Ctrl {

    static $inject = ["$injector"];

    config: iCrudTableConfig;

    source: Source;
    pager: Pager;

    constructor(inj: ng.auto.IInjectorService) {
        this.source = new Source(this.config.sourceName, this.config.dao.url, inj);
        this.pager = new Pager(1, 15);
        this.refreshPage()
    }

    refreshPage(): void {
        this.source.getPage(new Page().setPage(this.pager.page, this.pager.per))
            .then((res) => {
                this.pager.data = res.data;
                this.pager.total = res.items;
            })
    }

    refreshResource(origin: any) {
        this.source.getOne(origin.id).then((res) => angular.merge(origin, res))
    }

}

export const CrudTableCmpn: ng.IComponentOptions = {
    bindings: {
        config: "="
    },
    controller: Ctrl,
    controllerAs: "vm",
    template: require<string>("./TableTemplate.html")
};