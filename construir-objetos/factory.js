// Factory:

/*

 Vantagens:

  1 - Coloco o object literal como retorno;
  2 - Mantém a variável dentro do escopo da função;

 Desvantagens:

  1 - Recriação de funções internas;

*/

const createMicrophone = (color="black") => {
  let isOn = true;

  toggleOnOff: function() {
    if(microphone.isOn){
      console.log("desligar");
    } else {
      console.log("ligar");
    }
    isOn = !isOn;
  }

  return {
    color,

    toggleOnOff,
  }
}
