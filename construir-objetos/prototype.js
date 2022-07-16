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
} 

const microphone = new Microphone();

console.log(microphone)
