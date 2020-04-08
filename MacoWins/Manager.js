"use strict";

class Manager{

    constructor(){
        this.ropa = [
            {
                id: 123,
                type: 'saco',
                status: 'nueva',
                sold: false,
                amount: 1000
            },
            {
                id: 124,
                type: 'pantalon',
                status: 'promocion',
                sold: false,
                amount: 500
            },
            {
                id: 125,
                type: 'camisa',
                status: 'liquidacion',
                sold: false,
                amount: 800
            }
        ],

        this.ventas = new Venta();
        this.instance = []
        this.render()
    }

    
    
    render = () => {
        let object = {}
        this.ropa.map(element =>{
            object = new Ropa(element)
            this.instance.push(object);
        })

        this.listeners();
    }

    listeners(){
        
        const self = this;
        let ventaContainer = document.querySelector(`.listener_venta`);
        ventaContainer.addEventListener('click', function(){
            let id = null
            let prenda = null
            let opcion = null
            do{
                id = prompt("Ingrese ID de la prenda a vender")
                prenda = self.instance.filter(item => {
                    return item.data.id == id
                })[0]
            }while(!prenda)
            do{
                opcion = prompt("Desea pagar en efectivo o tarjeta? 1. efectivo 2. tarjeta.");

            }while(!opcion || opcion < 1 || opcion > 2)
            
            self.ventas.fillData(prenda.data, opcion)
        })

        let gananciaContainer = document.querySelector(`.listener_ganancias`);
        gananciaContainer.addEventListener('click', function(){
            console.log("ventas: ", self.ventas.ventas)
        })
    }
}
