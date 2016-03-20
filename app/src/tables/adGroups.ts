import iCrudTableConfig = crud.iCrudTableConfig;

//noinspection TypeScriptValidateTypes
export const table: iCrudTableConfig = {
    sourceName: "Группы объявлений",
    dao: {
        url: "/api/direct/bannerGroup?token=1:god&include=region,brand",
    },
    fields: {
        name: {
            title: "Название",
            type: "str"
        },
        brandId: {
            title: "Бренд",
            type: "num",
            rel: {
                dao: "/api/refs/brand"
            }
        },
        regionId: {
            title: "Регион",
            type: "num",
            rel: {
                dao: "/api/refs/brand"
            }
        },
        model: {
            title: "Модель",
            type: "str"
        },
        control: {
            title: "Медиаплан",
            type: "bool"
        },
        getAds: {
            title: "Тикеты",
            type: "bool"
        }
    }
};