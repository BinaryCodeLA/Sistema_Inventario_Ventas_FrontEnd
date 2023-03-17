import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ClientMessage {

    confirmations = {
        'title': 'confirmación',
        'add': 'Cliente ha sido agregado',
        'edit': 'cliente ha sido modificado con éxito',
        'delete': 'Cliente ha sido removido'
    }
    validations = {
       
        "customer_name": "Cliente es requerido", 
        "customer_email": "Correo es requerido",
        "customer_phone": "Teléfono es requerido", 
        "customer_address": "Dirección es requerido",
        "status_id": "Estado es requerido", 
        "customer_description": "Descripción es requerido"
    
    }

    constructor() {

    }
}