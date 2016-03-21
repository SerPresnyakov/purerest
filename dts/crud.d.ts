declare module crud {

    interface iRel {
        name: string
        field: string
        dao: string
        type: "one" | "many"
        displayField?: string
    }

    interface fieldType {
        type: string
    }

    interface iField {
        name: string
        title: string
        fieldType: fieldType
        nullable: boolean
    }

    interface iCrudTableConfig {
        sourceName: string
        url: string
        fields: iField[]
        rels: iRel[]
    }

}