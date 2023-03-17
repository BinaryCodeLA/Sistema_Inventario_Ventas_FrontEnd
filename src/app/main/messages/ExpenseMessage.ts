import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ExpenseMessage {

    confirmations = {
        'title': 'confirmación', 
        'add': 'Gasto ha sido agregado',
        'edit': 'el gasto se ha modificado con éxito',
        'delete': 'gasto ha sido removido'
    }
    validations = {
        id: 1,
        "expense_paymentDate": "La fecha de pago es mandatoria",
        "supplier_id": "Proveedor es requerido",
        "expense_paymentType": "Tipo de pago es requerido",
        "expense_paymentAccount": "Cuenta de pago es requerida",
        "expense_amount": "Monto es requerido",
        "expense_details": ""
    }

    constructor() {

    }
}