
import {Pager} from "../source/Pager";
import {Page} from "../source/Page";
import {Source} from "../source/Source";
import iCrudTableConfig = crud.iCrudTableConfig;

import {getDialog as autocompleteDialog} from "./autocompleteDialog/Cmpn"
import {getDialog as createDialog} from "./create/Cmpn"

class Ctrl {

    static $inject = ["$injector", "$mdEditDialog", "$mdDialog"];

    config: iCrudTableConfig;

    source: Source;
    pager: Pager;

    constructor(
        inj: ng.auto.IInjectorService,
        public $editDialog: mdTable.EditDialogService,
        public $mdDialog: ng.material.IDialogService
    ) {
        this.source = new Source(this.config.sourceName, this.config.dao.url, inj);
        this.pager = new Pager(1, 15);
        this.refreshPage()
    }

    editProp($event: ng.IAngularEvent, origin: any, fieldName: string) {

        $event.stopPropagation();

        let field: crud.iField  = this.config.fields[fieldName];

        if (field) {

            if (field.rel) {

                this.$editDialog.show(autocompleteDialog($event, field, origin))

            } else if (field.type == 'str') {

                this.$editDialog.small({
                    modelValue: origin[fieldName],
                    type: "text",
                    targetEvent: $event,
                    save: (ctrl: ng.INgModelController) => {
                        origin[fieldName] = ctrl.$modelValue
                    },
                    placeholder: field.title
                })

            } else {
                console.log('Unsupported field type')
            }

        } else {
            console.warn(`Field '${fieldName}' not configured`)
        }

    }

    create($event: ng.IAngularEvent) {

        this.$mdDialog.show(createDialog($event, this.config))

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