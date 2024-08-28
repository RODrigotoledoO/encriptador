var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".munieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultaradelante();
    var cajatexto = recuperartexto();
    resultado.textContent = encriptartexto(cajatexto);
}

function desencriptar() {
    ocultaradelante();
    var cajatexto = recuperartexto();
    resultado.textContent = desencriptartexto(cajatexto);
}

function recuperartexto() {
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultaradelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptartexto(mensaje) {
    var texto = mensaje;
    var textofinal = "";
    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a":
                textofinal += "ai";
                break;
            case "e":
                textofinal += "enter";
                break;
            case "i":
                textofinal += "imes";
                break;
            case "o":
                textofinal += "ober";
                break;
            case "u":
                textofinal += "ufat";
                break;
            default:
                textofinal += texto[i];
                break;
        }
    }
    return textofinal;
}

function desencriptartexto(mensaje) {
    var texto = mensaje;
    var textofinal = texto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textofinal;
}

function copiarTexto() {
    var texto = resultado.textContent;
    if (texto) {
        navigator.clipboard.writeText(texto)
            .then(() => {
                console.log("Texto copiado al portapapeles");
            })
            .catch(err => {
                console.error("Error al copiar el texto: ", err);
            });
    } else {
        console.log("hola");
    }
}

