var inputText = document.querySelector(".input-text");
var outputText = document.querySelector(".output-text");
var instruccion = document.querySelector(".instruccion");
var mensaje = document.querySelector(".mensaje");

//Validar acentos, números y mayúsculas
function validacion(e) {
    var key = e.keyCode || e.which;
    var tecla = String.fromCharCode(key).toString();
    var letrasPermitidas = " abcdefghijklmnñopqrstuvwxyz";
    var teclaEnter = 13;
    var teclaEspecial = false;

    if(key == teclaEnter) {
        teclaEspecial = true;
    }
     
    if(letrasPermitidas.indexOf(tecla) == -1 && !teclaEspecial) {
        alert ("Ingresa solo letras minúsculas. No se aceptan acentos, caracteres especiales y números");
        return false;
    }
}

//Encriptación
function resultadoEncriptar() {
    var textoEncriptado = encriptar(inputText.value);

    if(inputText.value.length == 0) {
        instruccion.style.display = "inline-flex"; //Muestra la instrucción 
        mensaje.style.display = "none"; //Oculta el resultado
        inputText.focus();
    } else {
        outputText.value = textoEncriptado; //Muestra el resultado del texto ya encriptado
        inputText.value = ""; //Vaciar textarea del bloque izquierdo
        instruccion.style.display = "none"; //Oculta la instrucción 
        mensaje.style.display = "inline-flex"; //Muestra el resultado
        outputText.focus();
    }
}

function encriptar(textoCapturado) {
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    textoCapturado = textoCapturado.toLowerCase(); //Convierte el resultado todo en minúsculas

    //Encriptación
    for(i = 0; i < llavesEncriptacion.length; i++) {
        if(textoCapturado.includes(llavesEncriptacion[i][0])) {
            textoCapturado = textoCapturado.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
        }
    }
    
    return textoCapturado; //Resultado
}

//Copiar texto del textarea izquierdo
function copiar() {
    outputText.select(); 
    outputText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(outputText.value);
}

//Desencriptación
function resultadoDesencriptar() {
    var textoDesencriptado = desencriptar(inputText.value);

    if(inputText.value.length == 0) {
        instruccion.style.display = "inline-flex"; //Muestra la instrucción 
        mensaje.style.display = "none"; //Oculta el resultado
        inputText.focus();
    } else {
        outputText.value = textoDesencriptado; //Muestra el resultado del texto ya desencriptado
        inputText.value = ""; //Vaciar textarea del bloque izquierdo 
        instruccion.style.display = "none"; //Oculta la instrucción
        mensaje.style.display = "inline-flex"; //Muestra el resultado
        outputText.focus();
    }
} 

function desencriptar(textoCopiado) {
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    textoCopiado = textoCopiado.toLowerCase(); //Convierte el resultado todo en minúsculas

    //Desencriptación
    for(i=0; i < llavesEncriptacion.length; i++) {
        if(textoCopiado.includes(llavesEncriptacion[i][1])) {
            textoCopiado = textoCopiado.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0]);
        }
    }
    return textoCopiado; //Resultado
}