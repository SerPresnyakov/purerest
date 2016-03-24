import {AuthService} from "./auth/AuthService";
import IFormlyConfig = AngularFormly.IFormlyConfig;
import {Ctrl} from "./crud/table/createDialog/Ctrl";

export class Run {

    static $inject = ["$rootScope", "$mdSidenav", "$mdMedia","formlyConfig"];

    constructor(rootScope: ng.IRootScopeService, sidenav: ng.material.ISidenavService, mdMedia: ng.material.IMedia,formlyConfig:IFormlyConfig) {

        rootScope.$on('$stateChangeSuccess', () => {
            var nav;
            if (!mdMedia('gt-sm')) nav = sidenav("leftNav");
            if (nav && nav.isOpen()) nav.close()
        });

        formlyConfig.setType({
            name: 'input',
            template: '<input ng-model="model[options.key]">'
        });

        formlyConfig.setType({
            name: 'autocomplete',
            template: require<string>("./crud/table/createDialog/autocomplete.html"),
            controller:Ctrl
        });

        formlyConfig.setType({
            template:'<md-switch ng-model="model[options.key]" md-theme="{{to.theme}}">{{to.label}} </md-switch>',
            name: 'switch',
            defaultOptions: {
                templateOptions: {
                    disabled: false
                },
                ngModelAttrs: {
                    disabled: {
                        bound: 'ng-disabled'
                    }
                }
            },
        });

        formlyConfig.setWrapper({
            name: 'mdLabel',
            types: ['input','autocomplete'],
            template: '<label>{{to.label}}</label><formly-transclude></formly-transclude>'
        });

        formlyConfig.setWrapper({
            name: 'mdInputContainer',
            types: ['input','autocomplete'],
            template: '<md-input-container class="md-block"><formly-transclude></formly-transclude></md-input-container>'
        });

    }

}