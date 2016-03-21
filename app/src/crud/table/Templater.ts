export class Templater {

    constructor(
        public config: CrudTableConfig,
        public ctrlAs: string
    ) {}

    getTemplate(): string {
        return "" +
            this.getToolbar() +
            this.getTable()
    }

    getToolbar(): string {
        return "" +
            '<md-toolbar class="md-table-toolbar md-default">' +
                '<div class="md-toolbar-tools">' +
                    `<span>${this.config.sourceName}</span>` +
                    '<span flex></span>' +
                    `<md-button class="md-raised md-primary" ng-click="${this.ctrlAs}">Создать</md-button>` +
                '</div>' +
            '</md-toolbar>'
    }

    getTable(): string {

        return '' +
            '<md-table-container>' +
                '<table md-table>' +
                    this.getThead() +
                    this.getTBody() +
                '</table>' +
            '</md-table-container>'

    }

    getThs(): string {
        let res = [];
        angular.forEach(this.config.fields, (f, fieldName) => {
            res.push(`<th md-column>${f.title}</th>`)
        });
        return res.join("\n")
    }

    getThead(): string {
        return "" +
            "<thead md-head>" +
                `<tr md-row>${this.getThs()}</tr>` +
            "</thead>"
    }

    getTBody(): string {
        return "" +
            "<tbody md-body>" +
                `<tr md-row ng-repeat='o in ${this.ctrlAs}.pager.data'>` +
                    this.getTds("o") +
                "</tr>" +
            "</tbody>";
    }

    getTds(item: string): string {
        let res = [];
        angular.forEach(this.config.fields, (f, fieldName) => {
            res.push(`<td md-cell>{{${item}.${fieldName}}}</td>`)
        });
        return res.join("\n")
    }

    getCell(f: crud.iField, fieldName: string) {
        let rel = this.config.getRel(fieldName);
        if (f.rel) {

        }
    }

}