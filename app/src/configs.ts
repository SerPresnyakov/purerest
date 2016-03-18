import iCrudTableConfig = crud.iCrudTableConfig;

//noinspection TypeScriptValidateTypes
export const resourceTable: iCrudTableConfig = {
    sourceName: "Таблицы",
    dao: {
        url: "/api/resource",
        rights: {
            insert: true,
            update: true,
            delete: true
        }
    },
    fields: [{
        name: "name",
        title: "название",
        type: "str"
    }, {
        name: "tableName",
        title: "таблица",
        type: "str"
    }, {
        name: "url",
        title: "url",
        type: "str"
    }]
};