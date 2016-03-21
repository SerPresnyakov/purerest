
import {Pager} from "../source/Pager";
import {Page} from "../source/Page";
import {Source} from "../source/Source";
import iCrudTableConfig = crud.iCrudTableConfig;

import {getDialog as autocompleteDialog} from "./autocompleteDialog/Cmpn"
import {getDialog as createDialog} from "./create/Cmpn"
import {Templater} from "./Templater";
import iRel = crud.iRel;

class Ctrl {

    static $inject = ["$injector", "$mdEditDialog", "$mdDialog"];

    config: CrudTableConfig;

    source: Source;
    pager: Pager;

    constructor(
        public inj: ng.auto.IInjectorService,
        public $editDialog: mdTable.EditDialogService,
        public $mdDialog: ng.material.IDialogService
    ) {}

    init(config: CrudTableConfig) {
        this.config = config;
        this.source = new Source(this.config.sourceName, this.config.url, this.inj);
        this.pager = new Pager(1, 15);
        this.refreshPage()
    }

    editProp($event: ng.IAngularEvent, origin: any, fieldName: string) {

        $event.stopPropagation();

        let field: crud.iField  = this.config.fields[fieldName];

        let rel = this.config.getRel(fieldName);

        if (field) {

            if (rel) {
                this.$editDialog.show(autocompleteDialog($event, field, origin, rel))
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

interface CtrlScope extends ng.IScope {
    config: iCrudTableConfig
    tmpl: string
}

export function CrudTableDirective($compile: ng.ICompileService): ng.IDirective {
    return {
        scope: {
            config: "=",
            tmpl: "="
        },
        controller: Ctrl,
        controllerAs: "vm",
        restrict: "E",
        link: (scope: CtrlScope, elem: ng.IAugmentedJQuery, attrs: any, ctrl: Ctrl) => {

            console.log("linking");

            let templ = "not found";

            let config = new CrudTableConfig(scope.config);

            if (scope.tmpl == "adGroups") {
                templ = require<string>("../../tables/AdgroupTemplate.html")
            } else {
                templ = new Templater(config, "vm").getTemplate()
            }

            elem.html(templ);
            $compile(elem.contents())(scope);
            ctrl.init(config)

        }
    }

}