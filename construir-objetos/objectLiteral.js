// Object Literal:

/*

 Vantagens:

  1 - Simples de criar;
  2 - Visualmente simples de entender;

 Desvantagens:

  1 - Reuso - se precisar criar mais de um;
  2 - Mudar algum detalhe;

*/

const microphone = {
  color: "black",
  isOn: true,
  toggleOnOff: function() {
    if(microphone.isOn){
      console.log("desligar");
    } else {
      console.log("ligar");
    }
    microfone.isOn = !microfone.isOn;
  }
}

// Desliga
microphone.toggleOnOff();

// Liga
microphone.toggleOnOff();
