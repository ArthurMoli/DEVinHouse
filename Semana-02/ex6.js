    var AlturaIMC = window.prompt('Digite sua altura:'); 
    var PesoIMC = window.prompt('Digite seu peso:'); 
    var AlturaV2 = AlturaIMC * AlturaIMC;
   var CalculoIMC = PesoIMC/AlturaV2;

       if (CalculoIMC<=18.5) {
        document.write('Seu IMC é: ' + CalculoIMC.toFixed(1) + "." + "<br>" + "Você está abaixo do peso, procure um médico.")
       }
       else if (CalculoIMC<=24.9) {
        document.write('Seu IMC é: ' + CalculoIMC.toFixed(1) + "." + "<br>" + "PARABÉNS!! Você está no peso ideal.")
       }
       else if  (CalculoIMC<=29.9) {
          document.write('Seu IMC é: ' + CalculoIMC.toFixed(1) + "." + "<br>" + "Você está acima do peso, procure um médico.")
       }
       console.log(CalculoIMC);