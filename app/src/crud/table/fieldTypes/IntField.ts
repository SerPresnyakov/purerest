import fieldType = crud.fieldType;

interface IIntField extends fieldType {
    min?: number
    max?: number
}

export class IntField implements IIntField {

    static _type = "int";

    type = IntField._type;

    static map(v: Object): string[]|IntField {
        return new IntField(v['min'], v['max'])
    }

    constructor(
        public min: number = null,
        public max: number = null
    ) {};

}
