var contador = 0, resposta, qtdPss;
while(contador < 4){
resposta = window.prompt("Qual a sua classificação para a série Stranger Things?");
switch(resposta){
case "Ruim":
qtdPss++;
break;
case "Bom":
break;
case "Excelente":
break;
}

contador++;
}

alert(qtdPss)