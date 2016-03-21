declare module crud {

    interface iRel {
        field: string
        dao: string
        type: "one" | "many"
    }

    interface iField {
        name: string
        title: string
        type: "num" | "str" | "bool"
        nullable: boolean
    }

    interface iCrudTableConfig {
        sourceName: string
        url: string
        fields: iField[]
        rels: iRel[]
    }

}