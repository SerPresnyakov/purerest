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
    localStorage:ng.local.storage.ILocalStorageService;
    token;

    constructor(
        protected sourceName: string,
        protected restUrl: string,
        protected inj: ng.auto.IInjectorService,
        public include: any
    ) {
        this.$http = inj.get<ng.IHttpService>("$http");
        this.$q = inj.get<ng.IQService>("$q");
        this.localStorage = inj.get<ng.local.storage.ILocalStorageService>("localStorageService");
        this.token = this.localStorage.get<string>("token");

    }

    getPage(page:Page): ng.IPromise<iPageResponse> {
        let result = this.$q.defer<iPageResponse>();
        let params = page;
        if (this.include != null) params["include"] = this.include.join(',');
        this.$http
            .get(this.restUrl, {params: params})
            .then((res: ng.IHttpPromiseCallbackArg<iPageResponse>) => result.resolve(res.data))
            .catch((err) => { console.error(err); result.reject(err.data); });

        return result.promise
    }

    getAll(): ng.IPromise<any[]> {
        return this.getPage(new Page().setGetAll()).then((res) => res.data)
    }

    getOne(id: number):ng.IPromise<any[]> {
        let params = {};
        if (this.include != null) params["include"] = this.include.join(',');
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
    //            return result.resolve(res.data);
    //        })
    //        .catch((err: ng.IHttpPromiseCallbackArg<string>) => {
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
        this.$http.patch(`${this.restUrl}/${id}`, doc, {headers: {
            token: this.token
        }})
            .then((res: ng.IHttpPromiseCallbackArg<boolean>) => {
            })
            .catch((err) => {
                result.reject(err.data)
            });
        return result.promise
    }

}
