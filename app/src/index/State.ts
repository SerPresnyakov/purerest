class Ctrl {
    constructor() {
        console.log("tadam")
    }
}

export const indexState: iRegister<ng.ui.IState> = {

    name: "index",
    config: {
        url: "/",
        template: require<string>("./template.html"),
        controllerAs: "vm",
        controller: Ctrl
    }

};