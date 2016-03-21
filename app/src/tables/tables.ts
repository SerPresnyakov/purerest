import iCrudTableConfig = crud.iCrudTableConfig;
import {StrField} from "../crud/table/fieldTypes/StrField";

//noinspection TypeScriptValidateTypes
export const table: iCrudTableConfig = {
    sourceName: "Таблицы",
    url: "/pureRest/resource",
    fields: [{
        name: "name",
        title: 'Название',
        fieldType: new StrField(),
        nullable: false
    },{
        name: "tableName",
        title: 'Имя таблицы',
        fieldType: new StrField(),
        nullable: false
    },{
        name: "url",
        title: 'URL',
        fieldType: new StrField(),
        nullable: false
    }],
    rels: []
};