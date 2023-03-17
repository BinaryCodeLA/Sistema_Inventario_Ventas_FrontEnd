import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ProductMessage {

    confirmations = {
        'title': 'confirmación', 
        'add': 'Producto ha sido agregado',
        'edit': 'producto ha sido modificado con éxito',
        'delete': 'Producto ha sido removido'
    }
    validations = {
        "product_name": "Nombre de categoria es requerido",
        "category_id": "id de Categoria es requerido",
        "supplier_id": "Proveedor es requerido",
        "product_unit": "Unidad es requerida",
        "product_alertquantity": "Cantidad es requerida",
        "product_supplierPrice": "Precio es requerido",
        "product_sellPrice": "Precio de venta es requerido",
        "product_code": "Código es requerido",
        "product_tax": "Impuesto es requerido",
        "warehouse_id": "Almacén es requerido",
        "product_details": "",
        "product_detailsforinvoice": ""
    }

    constructor() {

    }
}