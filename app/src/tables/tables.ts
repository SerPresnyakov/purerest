import iCrudTableConfig = crud.iCrudTableConfig;

//noinspection TypeScriptValidateTypes
export const table: iCrudTableConfig = {
    sourceName: "Таблицы",
    dao: {
        url: "/pureRest/resource",
        rights: {
            insert: false,
            update: true,
            delete: false
        }
    },
    fields: {
        name: {
            title: 'Название',
            type: 'str'
        },
        tableName: {
            title: 'Имя таблицы',
            type: 'str'
        },
        url: {
            title: 'URL',
            type: 'str'
        }
    }
};