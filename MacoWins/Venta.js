"use strict";

const COHEFICIENTE = 3;
class Venta{

    constructor(){

        this.ventas = []
    }

    fillData(data, opcion){
        data.date = new Date();
        if(opcion == 1){
            data.finalAmount = data.amount;
        }
        else{
            let cantCuotas = prompt("Ingrese cantidad de cuotas");
            data.finalAmount = (cantCuotas * 3) + data.amount;
        }
        alert("La prenda se vendió en: "+data.finalAmount);
        this.ventas.push(data)
    }
}
