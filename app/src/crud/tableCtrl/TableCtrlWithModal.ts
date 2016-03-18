import {ModalCtrl} from "./ModalCtrl"
import {CrudSource} from "../../common/source/CrudSource";
import {TableCtrl} from "./TableCtrl"

import IModalService = ng.ui.bootstrap.IModalService;
import {PageFilters} from "../source/Source";

import IConfirmService = angular.confirm.IConfirmService
import Ref = major.ref.Ref;

export class TableCtrlWithModal<M extends {id: number}, P, D extends CrudSource<M, P>> extends TableCtrl<M, D>  {

    prompt: IConfirmService;

    constructor(
        dao: D,
        protected inj: ng.auto.IInjectorService,
        protected schemaForm: schemaFormFactory,
        protected filters: PageFilters
    ) {
        super(dao, filters);
        this.prompt = inj.get<IConfirmService>("$confirm")
    }

    patch(o: M): ng.IPromise<any> {
        //noinspection TypeScriptValidateTypes
        return ModalCtrl.openWindow(this.inj, {
            dao: this.dao,
            model: o,
            schemaFormFactory: this.schemaForm,
            beforeSend: (model: any) => model
        }).result.then(() => {
            this.dao.getOne(o.id).then((res: M) => {
                angular.merge(o, res);
            })
        })
    }

    create(): ng.IPromise<M> {
        let q = this.dao.$q.defer<any>();
        //noinspection TypeScriptValidateTypes
        ModalCtrl.openWindow(this.inj, {
            dao: this.dao,
            model: null,
            schemaFormFactory: this.schemaForm,
            beforeSend: (model: any) => model
        }).result
            .then((id: number) => {
                this.dao.getOne(id).then((res) => {
                    this.pager.data.unshift(res);
                    q.resolve(res)
                }).catch((err) => q.reject(["getOne", err]))
            }).catch((err) => q.reject(err));

        return q.promise
    }

    remove(id: number, index: number): ng.IPromise<any> {

        return this.prompt({
            title: "Удалить запись",
            text: "Вы уверены?",
            ok: "Да, удалить",
            cancel: "Отмена"
        }).then(() => {
            this.dao.remove(id).then((res) => {
                if (res) this.pager.data.splice(index, 1)
            })
        })

    }

}
