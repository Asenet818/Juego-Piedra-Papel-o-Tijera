function opcion (usuario){

  var resultado = ["empate", "ganaste", "perdiste"];
  var opciones = ["piedra","papel","tijera"];

  var partidas = [
                    [0,1,2],
                    [2,0,1],
                    [1,2,0]
                 ];


  var maquina = Math.floor((Math.random() *3));
  var juego = partidas[maquina][usuario];

  document.getElementById("eligio").innerHTML= opciones[usuario];
  document.getElementById("yo").innerHTML= opciones[maquina];
  document.getElementById("ga").innerHTML= resultado[juego];


}

