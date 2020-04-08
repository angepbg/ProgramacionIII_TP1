"use strict";

const NUEVA = "nueva";
const PROMOCION = "promocion";
const LIQUIDACION = "liquidacion";
class Ropa{

    constructor(data){

        this.data = {
            id: data.id,
            type: data.type,
            status: data.status,
            sold: data.sold,
            amount: data.amount
        }
   

        this.showData();
    }

    showData(){
        let element = document.querySelector('.container_template').cloneNode(true);
        element.classList.remove('container_template');
        element.classList.add(`container_${this.data.id}`)
        element.querySelector('.container_id').innerHTML = this.data.id;
        element.querySelector('.container_type').innerHTML = this.data.type;
        element.querySelector('.container_status').innerHTML = this.data.status;
        element.querySelector('.container_amount').innerHTML = this.data.amount;
        element.querySelector('.container_sold').innerHTML = this.data.sold;
        
        document.getElementById("body").appendChild(element);

        this.listeners()
    }

    listeners(){
        const self = this
        let consulta = document.querySelector(`.container_${this.data.id} .listener_consulta_precio`);
        consulta.addEventListener('click', function(){
            self.consultarPrecio();
        })

    }

    consultarPrecio(){

        const self = this;
        let precioVenta = 0;

        if(this.data.status == NUEVA){

            precioVenta = self.data.amount

        }
        else if(this.data.status == PROMOCION){
            
            let descuento = 0 
            do{
                descuento = prompt("De cuanto desea el descuento?")
            }while(descuento >= self.data.amount);
            
            descuento = descuento ? descuento : 0; 
            precioVenta = self.data.amount - parseInt(descuento)

        }
        else if(this.data.status == LIQUIDACION){
            precioVenta = self.data.amount/2;
        }

        alert(`El precio venta es: ${precioVenta}`)
        return precioVenta;
    }

}