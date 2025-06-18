let dias = Number(prompt("quanto dias você irá se hospeda"))
let preço

 if(dias <= 5){
    preço = dias * 75 + 150
    alert("você irá pagar R$" + preço)
 }else if(dias >= 6 && dias <= 10 ){
    preço = dias * 90 * 75 / 100 + 150
    alert("você irá pagar R$" + preço)
}else if(dias >= 11){
     preço = dias * 80 * 75 / 100 + 150
    alert("você irá pagar R$" + preço)
 }