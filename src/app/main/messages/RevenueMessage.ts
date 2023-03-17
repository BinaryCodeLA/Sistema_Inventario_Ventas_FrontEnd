import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class RevenueMessage {

    confirmations = {
        'title': 'confirmación',
         'add': 'Ingreso ha sido agregado',
        'edit': 'los ingresos se han modificado con éxito',
        'delete': 'Ingreso ha sido removido'
    }
    validations = {
        
        "income_paymentDate": "Fecha de pago es requerida",
        "customer_id": "Cliente es requerido",
        "income_paymentType": "Tipo de pago es requerido",
        "income_paymentAccount": "Cuenta es requerida",
        "income_amount": "Monto es requerido",
        "income_details": "Detalles son requerido"
    }

    constructor() {

    }
}