import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class SellMessage {

    confirmations = {
        'title': 'confirmación',
         'add': 'Venta ha sido agregada',
        'edit': 'Venta ha sido modificada con éxito',
        'delete': 'Venta ha sido removida'
    }
    validations = {
       "customer_id": "Cliente es requerido",
        "sale_date": "Fecha es requerida",
        "sale_status": "Estado es requerido",
        "sale_invoiceNo": "No factura es requerida"
    }

    constructor() {

    }
}