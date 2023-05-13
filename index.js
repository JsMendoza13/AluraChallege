function encriptar() {
  let text = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("tituloMensaje");
  let parrafoMensaje = document.getElementById("parrafoEncrip");
  let imgExito = document.getElementById("ImgEncriptado");

  let textCifrado = text
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (text.length != 0) {
    document.getElementById("texto").value = textCifrado;
    tituloMensaje.textContent = "Texto encriptado con exito! 😎";
    parrafoMensaje.textContent = "";
    text.textContent = "";
    imgExito.src = "img/02.png";
  } else {
    imgExito.src = "img/01.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado 🙄";
    parrafoMensaje.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar un texto! 🤔");
 
  }
}

function desencriptador() {
  let text = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("tituloMensaje");
  let parrafoMensaje = document.getElementById("parrafoEncrip");
  let imgExito = document.getElementById("ImgEncriptado");

  let textDecifrado = text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (text.length != 0) {
    document.getElementById("texto").value = textDecifrado;
    tituloMensaje.textContent = "Texto Desencriptado! 😨";
    parrafoMensaje.textContent = "";
    imgExito.src = "img/03.png";
  } else {
    imgExito.src = "img/01.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado 🙄";
    parrafoMensaje.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar un texto! 🤔");
  }
}
