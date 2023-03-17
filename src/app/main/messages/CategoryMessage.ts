import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class CategoryMessage {

    confirmations = {
        'title': 'confirmación',
        'add': 'Categoría ha sido agregada',
        'edit': 'categoría ha sido modificada con éxito',
        'delete': 'Categoría ha sido removida'
    }
    validations = {
           "category_name": "Nombre de la categoría es requerido",
        "status_id": "Estado es requerido",
        "category_details": "Detalles son requeridos"
    }

    constructor() {

    }
}