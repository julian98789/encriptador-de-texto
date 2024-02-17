function encriptar() {

  let texto = document.querySelector(".text-area").value;

  if (!texto.match(/^[a-z\s]+$/)) {
    // Mostrar mensaje de error
    alert("El texto debe contener solo letras minúsculas y sin acentos.");
    return;
  }

  let textoEncriptado = texto
  .replace(/e/g, "enter")
  .replace(/i/g, "imes")
  .replace(/a/g, "ai")
  .replace(/o/g, "ober")
  .replace(/u/g, "ufat");


  document.querySelector(".mensaje-encriptado").value = textoEncriptado;

  document.querySelector(".mensaje-encriptado").style.backgroundImage ="none";

  document.querySelector(".btn-copia").style.display = "inline-block";
}

function desencriptar() {
  let textoEncriptado = document.querySelector(".mensaje-encriptado").value;

  let textoDesencriptado = textoEncriptado
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

  document.querySelector(".mensaje-encriptado").value = textoDesencriptado;
}

function copiar() {

  var mensajeEncriptadoElement = document.querySelector(".mensaje-encriptado");

  // crea un area de texto temporal
  var textarea = document.createElement("textarea");
  textarea.value = mensajeEncriptadoElement.value;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy");

  document.body.removeChild(textarea);
  alert("Texto copiado al portapapeles");
}





  