import {CrudTableConfig} from "../../crud/table/CrudTableConfig";
import {StrField} from "../../crud/table/fieldTypes/StrField";

export const table: CrudTableConfig = new CrudTableConfig("Клиенты", "/left/client")
    .setFields([{
        name: "name",
        title: 'Имя',
        fieldType: new StrField(),
        nullable: false,
        formly:"input"
    },{
        name: "login",
        title: 'Логин',
        fieldType: new StrField(),
        nullable: false,
        formly:"input"
    }]);