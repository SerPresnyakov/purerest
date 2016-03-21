export interface fieldType {
    type: string
}

export class TableField {

    constructor(
        public name: string,
        public title: string,
        public fieldType: fieldType,
        public nullable: boolean
    ) {}

}