// PREGUNTA N°2

// 1.- PROPINA
 
let tip;
tip=200+200*0.15;
console.log(tip);

// 2.- MENSAJE DE FACTURA Y VALOR FINAL

let factura= 275;
let propina= factura*0.15;
let valor_total= factura+propina;
console.log("La factura fue", factura, "la propina fue", propina, "y el valor total", valor_total);

// 3.- PROPINA FUNCION

const calcTip = (FACTURA) => {
    if(FACTURA>=50){
        if(FACTURA<=300){
            return (FACTURA=FACTURA*0.15);
        }
    }else if(FACTURA>300){
        return (FACTURA=FACTURA*0.2);
    }
    if(FACTURA<50){
        return (console.log("NO HAY PROPINA"));
    }
}
console.log(calcTip(275));

// PARTE2
// 4.- ARRAY DE FACTURAS

const bills = [200,100,400,55,60];
console.log(bills);

// 5.- ARRAY PARA FACTURAS Y TOTALES
const tips =[];
const totals =[];

// 6.- ALMACENAMIENTO EN ARRAY

for(let i=0 ; i<bills.length; i++){
    tips[i]=+calcTip(bills[i]);
}
console.log(tips);