import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class BuyMessage {

    confirmations = {
        'title': 'Confirmación',
        'add': 'Compra ha sido agregada',
        'edit': 'la compra se ha modificado correctamente',
        'delete': 'Compra ha sido removida'
    }
    validationMessage = {
         "supplier": "Proveedor es requerido",
        "purchase_invoiceNo": "Factura es requerida",
        "purchase_status": "Estado es requerido",
        "purchase_date": "Fecha es requerida"
    }

    constructor() {

    }
}