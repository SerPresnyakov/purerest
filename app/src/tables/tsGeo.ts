import iCrudTableConfig = crud.iCrudTableConfig;

//noinspection TypeScriptValidateTypes
export const table: iCrudTableConfig = {
    sourceName: "GEO",
    url: "/pureRest/tsGeo",
    fields: [
        {
            name: "brandId",
            title: "Бренд",
            type: "num",
        },
        {
            name: "model",
            title: "Модель",
            type: "str"
        }
    ],
    rels: []
};