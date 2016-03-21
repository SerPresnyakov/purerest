import iCrudTableConfig = crud.iCrudTableConfig;

//noinspection TypeScriptValidateTypes
export const table: iCrudTableConfig = {
    sourceName: "GEO",
    dao: {
        url: "/pureRest/tsGeo",
        rights: {
            insert: false,
            update: true,
            delete: false
        }
    },
    fields: {
        brandId: {
            title: "Бренд",
            type: "num",
            rel: {
                dao: "/api/refs/brand"
            }
        },
        model: {
            title: "Модель",
            type: "str"
        }
    }
};