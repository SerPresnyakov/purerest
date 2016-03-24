import IState = ng.ui.IState

function isTokenForm(t: string): boolean {
  return t.match(/^\d+:.*/) != null
}

export class Run {

  static $inject = ["$state", "$rootScope", "localStorageService", "$http", "formlyConfig"];

  constructor($state:ng.ui.IStateService,
              $rootScope:ng.IRootScopeService,
              localStorage:ng.local.storage.ILocalStorageService,
              $http:ng.IHttpProvider,
              formlyConfig) {

    let token = localStorage.get<string>("token");

    if (token != null && isTokenForm(token)) {
      $http.defaults.headers.common['token'] = "1:god";
    } else {
      $state.go("login");
    }

    $rootScope.$on("$stateChangeError", (e:ng.IAngularEvent, toState:IState, p1:any, fromState:IState, p2:any, err:any) => {

      console.log("state change error");

      if (err.status == 401) {
        console.info("go to login");
        $state.go("login", {from: toState.name});
      } else {
        console.info("go to badGateway", err);
        $state.go("login", {from: toState.name})
      }

      e.preventDefault();

    });



    formlyConfig.setType({
        name: 'input',
        template: '<input ng-model="model[options.key]">'
    });



    formlyConfig.setWrapper({
        name: 'mdLabel',
        types: ['input'],
        template: '<label>{{to.label}}</label><formly-transclude></formly-transclude>'
    });

    formlyConfig.setWrapper({
        name: 'mdInputContainer',
        types: ['input'],
        template: '<md-input-container class="md-block"><formly-transclude></formly-transclude></md-input-container>'
    });
  }
}
