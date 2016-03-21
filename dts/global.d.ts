declare var require: {
    <T>(path: string): T
    (paths: string[], callback: (...modules: any[]) => void): void
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void
};

declare interface iSchemaForm {
    schema: Object
    form: Object[]
}

declare type modalMode = "create" | "update"

declare type schemaFormFactory = (mode: modalMode) => iSchemaForm

declare interface iRegister<T> {
    name: string
    config: T
}

interface Array<T> {
    find(predicate: (search: T) => boolean) : T;
}
