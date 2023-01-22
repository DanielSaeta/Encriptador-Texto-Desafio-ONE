var inputText = document.querySelector(".input-text");
var outputText = document.querySelector(".output-text");
var instruccion = document.querySelector(".instruccion");
var mensaje = document.querySelector(".mensaje");

function resultadoEncriptar(){
    var textoIngresado = encriptar(inputText.value);

    //muestra el mismo texto ingresado en el textarea
    outputText.value = textoIngresado;
    //oculta la instrucción y 
    instruccion.style.display = "none";
    //muestra el resultado
    mensaje.style.display = "inline-flex";
} 

function encriptar(textoCapturado){
    var llavesEncriptacion = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    //convierte a minúsculas
    textoCapturado = textoCapturado.toLowerCase();

    return textoCapturado;
}