import iRel = crud.iRel;
import iField = crud.iField;

class CrudTableConfig {

    sourceName: string;
    url: string;
    fields: iField[];
    rels: iRel[];

    //TODO: need validation for 'config' object
    constructor(config: crud.iCrudTableConfig) {

        this.sourceName = config.sourceName;
        this.fields = config.fields;
        this.rels = config.rels;
        this.url = config.url;

    }

    getRel(fieldName: string): iRel {
        return this.rels.find(r => r.field == fieldName)
    }

}