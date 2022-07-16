// Class:

/*

 Vantagens:

  1 - Syntatic sugar;
  2 - Prototype under the hood;
  3 - Clareza visual;

 Desvantagens:

  1 - É diferente da class de linguagens com POO;
  2 - O "new" NÃO cria uma instância da class, mas um objeto com cadeia de prototótipos;

*/

class Microfone {
  constructor(color = "black") {
    this.color = color;
    this.isOn = true;
  }

  toggleOnOff() {
    if(microphone.isOn){
      console.log("desligar");
    } else {
      console.log("ligar");
    }
    isOn = !isOn;
  }
}
