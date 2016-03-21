interface IStrField extends crud.fieldType {
    pattern: string
    minLength: string
    maxLength: string
}

export class StrField implements IStrField {

    static _type = "str";

    type = StrField._type;

    static map(v: Object): string[]|StrField {
        return new StrField(
            v['pattern'],
            v['minLength'],
            v['maxLength']
        )
    }

    constructor(
        public pattern: string = null,
        public minLength: string = null,
        public maxLength: string = null
    ) {}
}