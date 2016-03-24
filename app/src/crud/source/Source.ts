import {Page} from "./Page";



interface iPageResponse {
    data: any[]
    items: number
}

export interface PageFilters {
    getWhere(): string[]
}

export class Source {

    $http: ng.IHttpService;
    $q: ng.IQService;

    constructor(
        protected sourceName: string,
        protected restUrl: string,
        protected inj: ng.auto.IInjectorService
    ) {
        this.$http = inj.get<ng.IHttpService>("$http");
        this.$q = inj.get<ng.IQService>("$q");
    }

    getPage(page:Page): ng.IPromise<iPageResponse> {
        let result = this.$q.defer<iPageResponse>();
        this.$http
            .get(this.restUrl, {params: page})
            .then((res: ng.IHttpPromiseCallbackArg<iPageResponse>) => result.resolve(res.data))
            .catch((err) => { console.error(err); result.reject(err.data); });

        return result.promise
    }

    getAll(): ng.IPromise<any[]> {
        return this.getPage(new Page().setGetAll()).then((res) => res.data)
    }

    getOne(id: number):ng.IPromise<any[]> {
      let params = {};
      return this.$http
          .get(`${this.restUrl}/${id}`,{params: params})
          .then((res) => res.data)
    }

    //create(doc: M): ng.IPromise<number> {
    //    let result = this.$q.defer<number>();
    //
    //    this.$http
    //        .post(`${this.restUrl}`, doc)
    //        .then((res: ng.IHttpPromiseCallbackArg<number>) => {
    //            this.toastr.info("Создано", this.sourceName);
    //            return result.resolve(res.data);
    //        })
    //        .catch((err: ng.IHttpPromiseCallbackArg<string>) => {
    //            this.toastr.error(`Не могу создать запись: ${err.data}`, `${this.sourceName}`);
    //            result.reject(err.data)
    //        });
    //
    //    return result.promise
    //}
    //
    //remove(id: number): ng.IPromise<boolean> {
    //
    //    let result = this.$q.defer<boolean>();
    //
    //    this.$http
    //        .delete(`${this.restUrl}/${id}`)
    //        .then((res: ng.IHttpPromiseCallbackArg<boolean>) => {
    //            if (res.data) { this.toastr.info("Удалено", `${this.sourceName}`); }
    //            result.resolve(res.data);
    //        })
    //        .catch((err: ng.IHttpPromiseCallbackArg<string>) => {
    //            this.toastr.error('Не могу удалить запись. ' + err.data, `${this.sourceName}`);
    //            result.reject(err.data)
    //        });
    //
    //    return result.promise
    //
    //}
    //
    patch(id: number, doc: any): ng.IPromise<boolean> {
        let result = this.$q.defer<boolean>();
        this.$http.patch(`${this.restUrl}/${id}`, doc)
            .then((res: ng.IHttpPromiseCallbackArg<boolean>) => {
            })
            .catch((err) => {
                result.reject(err.data)
            });
        return result.promise
    }

}
