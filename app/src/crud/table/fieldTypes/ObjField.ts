import {TableField} from "../TableField";
import {fieldType} from "../TableField";
import {Helper} from "../Helper";
import {TableRel} from "../TableRel";

export interface IObjField extends fieldType {
    fields: TableField[]
    rels: TableRel[]
    rest
}

export class ObjField implements IObjField {

    static _type = "obj";

    type = ObjField._type;

    toSchema(): Object {
        return Helper.getSchema(this.fields,this.rels, this.rest)
    }

    //static map(v: Object): string[]|ObjField {
    //    return new ObjField(
    //        v['schema']
    //    )
    //}

    constructor(
        public fields: TableField[],
        public rels: TableRel[],
        public rest
    ) {}

}