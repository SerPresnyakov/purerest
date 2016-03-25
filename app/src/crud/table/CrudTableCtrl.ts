import {CrudTableConfig} from "./CrudTableConfig";
import {Source} from "../source/Source";
import {Pager} from "../source/Pager";

import {getDialog as autocompleteDialog} from "./autocompleteDialog/Cmpn"
import {getDialog as createDialog} from "./createDialog/Cmpn"

import {StrField} from "./fieldTypes/StrField";
import {Page} from "../source/Page";
import {TableField} from "./TableField";

export class CrudTableCtrl {

    static $inject = ["$injector", "$mdEditDialog", "$mdDialog", "Restangular"];

    config: CrudTableConfig;

    source: Source;
    pager: Pager;

    constructor(
        public inj: ng.auto.IInjectorService,
        public $editDialog: mdTable.EditDialogService,
        public $mdDialog: ng.material.IDialogService,
        private restangular: restangular.IService
    ) {}

    init(config: CrudTableConfig) {
        this.config = config;
        this.config.rest= this.restangular;
        this.source = new Source(this.config.sourceName, this.config.url, this.inj, this.config.getIncludes());
        this.pager = new Pager(1, 15);
        this.refreshPage()
    }

    editProp($event: ng.IAngularEvent, origin: any, fieldName: string) {

        $event.stopPropagation();
        let field: TableField  = this.config.getField(fieldName);

        let rel = this.config.getRel(fieldName);

        if (field) {

            if (rel) {
                this.$mdDialog.show(autocompleteDialog($event, field, origin, rel, this.$mdDialog, this.source))
            } else if (field.fieldType instanceof StrField) {

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
            console.error(`Field '${fieldName}' not configured`)
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