import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class IncomeMessage {

    confirmations = {
        'title': 'confirmación',
         'add': 'Ingreso ha sido agregado',
        'edit': 'la compra se ha modificado correctamente',
        'delete': 'Ingreso ha sido removido'
    }
    validations = {
        "income_paymentDate": "Pago es requerido",
        "customer_id": "Cliente es requerido",
        "income_paymentType": "Tipo de pago es requerido",
        "income_paymentAccount": "Cuenta de pago",
        "income_amount": "Monto del ingreso es requerido",
        "income_details": "Detalles son requeridos"
    }

    constructor() {

    }
}