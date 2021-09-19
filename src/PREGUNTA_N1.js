const ricks=[96,108,89];
const mortys=[88,91,110];

console.log(ricks);
console.log(mortys);

// PREGUNTA 1
// 1.- PROMEDIO DE LOS 2 EQUIPOS

let totalricks=0;
for(let i=0; i<ricks.length; i++){
    totalricks= totalricks+ricks[i];
}
totalricks=totalricks/3;
console.log("totalricks",totalricks);

let totamortys=0;
for(let i=0; i<mortys.length; i++){
    totamortys= totamortys+mortys[i];
}
totamortys=totamortys/3;
console.log("totalmortys",totamortys);

// 2.- GANADOR

if(totalricks>totamortys){
  console.log("El ganador es el equipo Ricks");
} else{
  console.log("El ganador es el equipo Morty");
}
if(totalricks===totamortys){
  console.log("Existe un empate");
}

// 3.- PUNTUACION

let SumaRick=0;
for(let i=0; i<ricks.length; i++){
    if(ricks[i]>=100){
      SumaRick=SumaRick+ricks[i];
    }
}
let SumaMorty=0;
for(let i=0; i<mortys.length; i++){
    if(mortys[i]>=100){
      SumaMorty=SumaMorty+mortys[i];
    }
}
let total=0;
if(SumaMorty>SumaRick){
  total=SumaMorty;
  console.log("Ganador equipo Mortys",total);
} else{
  total=SumaRick;
  console.log("Ganador equipo Ricks",total);
}

// 4.- PUNTUACION MINIMA

for(let i=0; i<ricks.length; i++){
  for(let j=i; j<mortys.length; j++){
    if(ricks[i]===mortys[j]){
      console.log("EMPATE");
    } else if(ricks[i]>=100){
      if(mortys[j]>=100){
        console.log("EMPATE");
      }
    }
  }
}

// 5.- PROMEDIO POR UNA FUNCION

const calcAverage=(a, b, c) =>{
  return (a+b+c)/3;
}
console.log("PROMEDIO DE PUNTUACIONES",calcAverage(96,108,89));

// 6.- PROMEDIO DE LOS EQUIPOS

console.log("RICKS",calcAverage(96,108,89));
console.log("MORTYS",calcAverage(88,91,110));

console.log("RICKS",calcAverage(97,112,101));
console.log("MORTYS",calcAverage(109,95,123));

console.log("RICKS",calcAverage(97,112,101));
console.log("MORTYS",calcAverage(109,95,106));

// 7.- CheckWinner

const checkWinner=(avgRIcks, avgMortys)=>{
  if(avgRIcks > avgMortys){
    return ('Los RICKS ganan ' +avgRIcks+ ' contra '+ avgMortys)
  } else{
    return ('Los MORTYS ganan ' +avgMortys+ ' contra '+ avgRIcks)
  }
}

// 8.- DETERMINAR GANADOR

console.log(checkWinner(96, 88));
console.log(checkWinner(108, 91));
console.log(checkWinner(89, 110));
console.log(checkWinner(97, 109));
console.log(checkWinner(112, 95));
console.log(checkWinner(101, 123));