import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class EmployeeMessage {

    confirmations = {
        'title': 'confirmacion',
        'add': 'Empleado ha sido agregado',
        'edit': 'empleado ha sido modificado con éxito',
        'delete': 'Empleado ha sido removido'
    }
    validations = {
          "employee_fname": "Nombre es requerido",
        "employee_email": "Correo es requerido",
        "employee_phone": "Teléfono es requerido",
        "employee_gender": "Género es requerido",
        "employee_nid": "",
        "status_id": "Estado es requerido",
        "employee_birthday": "Empleado es requerido",
        "employee_address": "Correo es requerido",
        "employee_salary": "Salario es requerido"
    }

    constructor() {

    }
}