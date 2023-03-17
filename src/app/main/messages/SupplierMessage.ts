import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class SupplierMessage {

    confirmations = {
        'title': 'confirmación', 
        'add': 'Proveedor ha sido agregado',
        'edit': 'el proveedor ha sido modificado con éxito',
        'delete': 'Proveedor ha sido removido'
    }
    validations = {
        "id": 1,
        "supplier_name": "Proveedor es requerido",
        "supplier_phone": "Teléfono es requerido",
        "supplier_email": "Correo es requerido",
        "supplier_company": "Compañia es requerida",
        "supplier_address": "Dirección es requerida",
        "status_id": "Estado es requerido",
        "supplier_description": "Descripcion es requerida"
    }

    constructor() {

    }
}