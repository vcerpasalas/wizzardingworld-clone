/*Todo este codigo js es mío - Gino */

window.onload = function(){

    var puntajeFinal = localStorage.getItem("Puntaje");
    var divResultado = document.getElementById("resultado");
    divResultado.append("Resultado final: " + puntajeFinal + " puntos");
}