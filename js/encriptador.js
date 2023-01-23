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
    var llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    //convierte a minúsculas
    textoCapturado = textoCapturado.toLowerCase();
    //encriptación
    for(i = 0; i < llavesEncriptacion.length; i++){
        if(textoCapturado.includes(llavesEncriptacion[i][0])){
            textoCapturado = textoCapturado.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
        }
    }
    //resultado
    return textoCapturado;
}