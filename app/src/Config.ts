import {indexState} from "./index/State"

export class Config {

    static registerStates(moduleName: string, states: iRegister<ng.ui.IState>[]) {
        angular.module(moduleName).config(["$stateProvider", ($state) => {
            angular.forEach(states, (s) => {
                $state.state(s.name, s.config);
            })
        }])
    }

    static $inject = [
        "$urlRouterProvider",
        "ssSideNavSectionsProvider",
        "$mdThemingProvider"
    ];

    constructor(
        $url: ng.ui.IUrlRouterProvider,
        sideNav: any,
        $theming: ng.material.IThemingProvider
    ) {
        $url.when("", "/");

        sideNav.initWithSections([{
            id:     'toogle_1',
            name:   'Section Heading 1',
            type:   'heading',
            children: [{
                name:   'Toogle 1',
                type:   'toggle',
                pages:  [{
                    id:     'toggle_item_1',
                    name:   'item 1',
                    state:  'common.toggle.item1'
                }, {
                    id:     'toggle_item_2',
                    name:   'item 2',
                    state:  'common.toggle.item2'
                }]
            }]
        }, {
            id:         'link_1',
            name:       'Simple link to Index state',
            state:      'common.index',
            type:       'link',
            hidden: true // show menu ('true' for hide menu)
        }]);


        sideNav.initWithTheme($theming)
    }

}