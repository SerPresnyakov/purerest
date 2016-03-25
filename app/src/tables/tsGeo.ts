//noinspection TypeScriptValidateTypes
import {CrudTableConfig} from "../crud/table/CrudTableConfig";
import {IntField} from "../crud/table/fieldTypes/IntField";
import {StrField} from "../crud/table/fieldTypes/StrField";
import {TableField} from "../crud/table/TableField";

export const table: CrudTableConfig =
    new CrudTableConfig("GEO", "/pureRest/tsGeo")
        .setFields([
            {
                name: "brandId",
                title: "Бренд",
                fieldType: new IntField(),
                nullable: false,
                formly: "input"
            },
            {
                name: "model",
                title: "Модель",
                fieldType: new StrField(),
                nullable: false,
                formly: "input"
            }
        ]);