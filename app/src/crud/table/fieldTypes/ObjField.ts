import {TableField} from "../TableField";
import {fieldType} from "../TableField";

export interface IObjField extends fieldType {
    fields: TableField[]
}

export class ObjField implements IObjField {

    static _type = "obj";

    type = ObjField._type;

    static map(v: Object): string[]|ObjField {
        return new ObjField(
            v['schema']
        )
    }

    constructor(
        public fields: TableField[]
    ) {}

}