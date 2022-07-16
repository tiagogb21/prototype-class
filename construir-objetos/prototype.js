// Prototype:

/*

 Vantagens:

  1 - "this" é a referência do objeto;
  2 - criação de funções extras;

 Desvantagens:

  1 - Se criar função dentro da função principal ela será repetida;

*/

function Microphone(color = "black") {
  this.color = color;

  this.isOn = true;
}

// Microphone.prototype.toggleOnOff é o mesmo que colocar dentro de Microphone e chamar a função através de this.toggleOnOff

Microphone.prototype.toggleOnOff = function () {
  if(this.isOn){
    console.log("desligar");
  } else {
    console.log("ligar");
  }
  this.isOn = !this.isOn;
}

const microphone = new Microphone();
const microphone2 = new Microphone("white");

console.log(microphone)
