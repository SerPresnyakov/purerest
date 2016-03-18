declare module crud {

    interface Field {
        name: string
        title: string
        type: "num" | "str" | "bool"
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

        fields: Array<Field>

    }

}