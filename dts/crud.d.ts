declare module crud {

    interface Field {
        title: string
        type: "num" | "str" | "bool",
        rel?: {
            dao: string
            displayField?: string
        }
    }

    interface iCrudTableConfig {

        sourceName: string

        dao: {
            url: string
            rights: {
                insert: boolean
                update: boolean
                delete: boolean
            }
        }

        fields: { [name: string]: Field }

    }

}