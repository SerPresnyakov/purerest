import {LoginCtrl} from "./Ctrl";
export const loginState: IRegisterMeta<ng.ui.IState> =  {

    name:"login",
    config:{
        url: "/login?from",
        template: require<string>("./Template.html"),
        controller:LoginCtrl,
        controllerAs:"vm"

    }

};