import {CrudTableConfig} from "../CrudTableConfig";

export class Ctrl{

}



export function getDialog($mdDialog:ng.material.IDialogService, name): ng.material.IConfirmDialog {
    return $mdDialog.confirm()
        .title('Вы действительно хотите удалить ' + name + '?')
        .ok('Удалить!')
        .cancel('Отмена')
}

