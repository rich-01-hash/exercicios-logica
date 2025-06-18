let idade = Number (prompt("Digite sua idade :"))
 
  if(idade < 16){
    alert("você não vota ainda")
  }else if(idade == 16 && idade ==17){
    alert("você poderá votar mas seu voto é facultativo ")
  }else if(idade >= 18 && idade <=65){
    alert("você deve votar , o seu voto é obrigatório")
  }else if ( idade > 65){
    alert("você poderá votar mas seu voto é facultativo ")
  }