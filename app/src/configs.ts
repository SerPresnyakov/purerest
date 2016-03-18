import iCrudTableConfig = crud.iCrudTableConfig;

//noinspection TypeScriptValidateTypes
export const resourceTable: iCrudTableConfig = {
    sourceName: "Таблицы",
    dao: {
        url: "/api/direct/bannerGroup?token=1:god&include=region,brand",
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