var inputText = document.querySelector(".input-text");
var outputText = document.querySelector(".output-text");
var instruccion = document.querySelector(".instruccion");
var mensaje = document.querySelector(".mensaje");

//Encriptación
function resultadoEncriptar(){
    var textoEncriptado = encriptar(inputText.value);

    //muestra el resultado del texto ya encriptado
    outputText.value = textoEncriptado;
    //vaciar textarea del bloque izquierdo
    inputText.value = "";
    //oculta la instrucción y 
    instruccion.style.display = "none";
    //muestra el resultado
    mensaje.style.display = "inline-flex";
} 

function encriptar(textoCapturado){
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

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

//Copiar texto del textarea izquierdo
function copiar() {
    outputText.select(); 
    outputText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(outputText.value);
}

//Desencriptación
function resultadoDesencriptar(){
    var textoDesencriptado = desencriptar(inputText.value);

    //muestra el resultado del texto ya desencriptado
    outputText.value = textoDesencriptado;
    //vaciar textarea del bloque izquierdo
    inputText.value = "";
} 

function desencriptar(textoCopiado){
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    //convierte a minúsculas
    textoCopiado = textoCopiado.toLowerCase();
    //desencriptación
    for(i=0; i < llavesEncriptacion.length; i++){
        if (textoCopiado.includes(llavesEncriptacion[i][1])){
            textoCopiado = textoCopiado.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0]);
        }
    }
    //resultado
    return textoCopiado;
}