import iCrudTableConfig = crud.iCrudTableConfig;
import {IntField} from "../crud/table/fieldTypes/IntField";
import {StrField} from "../crud/table/fieldTypes/StrField";
import {BoolField} from "../crud/table/fieldTypes/BoolField";

//noinspection TypeScriptValidateTypes
export const table: iCrudTableConfig = {
    sourceName: "Группы объявлений",
    url: "/api/direct/bannerGroup?token=1:god&include=region,brand",
    fields: [{
        name: "id",
        title: "ID",
        fieldType: new IntField(),
        nullable: false
    },{
        name: "name",
        title: "Название",
        fieldType: new StrField(),
        nullable: false
    }, {
        name: "brandId",
        title: "Бренд",
        fieldType: new IntField(),
        nullable: true
    }, {
        name: "regionId",
        title: "Регион",
        fieldType: new IntField(),
        nullable: true
    }, {
        name: "model",
        title: "Модель",
        fieldType: new StrField(),
        nullable: true
    }, {
        name: "control",
        title: "Медиаплан",
        fieldType: new BoolField(),
        nullable: true
    }, {
        name: "getAds",
        title: "Тикеты",
        fieldType: new BoolField(),
        nullable: true
    }],
    rels: [{
        field: "brandId",
        name: "brand",
        dao: "/api/refs/brand",
        type: "one"
    }, {
        field: "regionId",
        name: "region",
        dao: "/api/refs/region",
        type: "one"
    }]
};