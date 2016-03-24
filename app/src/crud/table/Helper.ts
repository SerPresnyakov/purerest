import {TableField} from "./TableField";
import {ObjField} from "./fieldTypes/ObjField";
import {TableRel} from "./TableRel";

export class Helper {

    static getSchema(fields,rels): Object {

        var schema = [];


        angular.forEach(fields, (f: TableField) => {

            let res = {
                key: f.name,
                type: f.formly,
                templateOptions: {
                    label: f.title
                }
            };
            if(f.formly=="autocomplete"){
                res["data"]  = {};
                angular.forEach(rels,(r:TableRel) => {
                    if(r.name == f.name){
                        res["data"]["dao"]= r.dao;
                    }
                });
            }
            schema.push(res);
        });

        return schema;
    }

}