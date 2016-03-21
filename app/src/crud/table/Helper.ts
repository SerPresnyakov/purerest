import {TableField} from "./TableField";
import {ObjField} from "./fieldTypes/ObjField";

export class Helper {

    static getSchema(fields: TableField[]): Object {
        var props = {};
        var required: string[] = [];

        angular.forEach(fields, (f: TableField) => {

            props[f.name] = {
                title: f.title
            };

            if (f.fieldType instanceof ObjField) {

            }

            if (!f.nullable) {
                required.push(f.name)
            }
        });

        return {
            type: "object",
            properties: props,
            required: required
        }


    }

}