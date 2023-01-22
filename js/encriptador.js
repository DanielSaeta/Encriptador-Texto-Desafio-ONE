var inputText = document.querySelector(".input-text");
var outputText = document.querySelector(".output-text");
var instruccion = document.querySelector(".instruccion");
var mensaje = document.querySelector(".mensaje");

function resultadoEncriptar(){
    var textoIngresado = encriptar(inputText.value);
    console.log(textoIngresado);
    instruccion.style.display = "none";
    mensaje.style.display = "inline-flex";
} 

function encriptar(textoCapturado){
    return textoCapturado;
}