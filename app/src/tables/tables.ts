import {StrField} from "../crud/table/fieldTypes/StrField";
import {CrudTableConfig} from "../crud/table/CrudTableConfig";

export const table: CrudTableConfig = new CrudTableConfig("Таблицы", "/pureRest/resource")
    .setFields([{
        name: "name",
        title: 'Название',
        fieldType: new StrField(),
        nullable: false,
        formly:"input"
    },{
        name: "tableName",
        title: 'Имя таблицы',
        fieldType: new StrField(),
        nullable: false,
        formly:"input"
    },{
        name: "url",
        title: 'URL',
        fieldType: new StrField(),
        nullable: false,
        formly:"input"
    }]);