import {CrudSource} from "../../common/source/CrudSource"

interface IModalResolve {
  dao: CrudSource<any, any>
  model: any
  schemaFormFactory: schemaFormFactory
  beforeSend: (model: any) => any
}

export class ModalCtrl {

  static $inject = [
    "$uibModalInstance",
    "$scope",
    "resolve"
  ];

  modalHeader: string;
  schemaForm: iSchemaForm;
  mode: modalMode;
  model: any;

  constructor(
    private modalInst: ng.ui.bootstrap.IModalServiceInstance,
    private scope: ng.IScope,
    private resolve: IModalResolve
  ) {

    if (resolve.model == null) {
      this.mode = <modalMode>"create";
      this.model = {};
      this.modalHeader = "Создание"
    } else {
      this.mode = <modalMode>"update";
      this.model = angular.copy(resolve.model);
      this.modalHeader = "Обновление"
    }

    this.schemaForm = resolve.schemaFormFactory(this.mode)

  }

  close(res?: any) {
    this.modalInst.close(res)
  }

  dismiss(reason?: any) {
    this.modalInst.dismiss(reason)
  }

  ok() {
    this.scope.$broadcast("schemaFormValidate");

    if (this.scope['schemaForm'].$valid) {
      if (this.mode == "create") {
        this.resolve.dao.create(this.resolve.beforeSend(this.model)).then((id) => {
          this.close(id)
        })
      } else if (this.mode == "update") {
        this.resolve.dao.patch(this.resolve.model.id, this.model).then((res) => {
          if (res) {
            angular.extend(this.resolve.model, this.scope['model']);
            this.close()
          }
        })
      } else {
        console.error("wrong mode")
      }
    }
  }

  static openWindow(inj: ng.auto.IInjectorService, resolve: IModalResolve): ng.ui.bootstrap.IModalServiceInstance  {
    return inj.get<ng.ui.bootstrap.IModalService>("$uibModal").open({
      template: require<string>("./Modal.html"),
      controller: ModalCtrl,
      controllerAs: "vm",
      resolve: { resolve: resolve }
    })
  }

}
