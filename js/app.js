import { getImagem } from "./utils/image-service.js";

const verificar = document.getElementById("verificar-btn");

function calcularIdade() {
  const data = new Date();
  const anoAtual = data.getFullYear();
  const anoNascimento = document.getElementById("txtano");
  const resultado = document.getElementById("res");

  if (anoNascimento.value.length === 0 || Number(anoNascimento.value) > anoAtual) {
    alert("[ERRO] Verifique os dados e tente novamente!");
    return;
  }

  const sexo = document.getElementsByName("radsex");
  const idade = anoAtual - Number(anoNascimento.value);
  let genero = "";
  let generoTexto = "";

  if (sexo[0].checked) {
    genero = "m";
    generoTexto = "Homem";
  } else if (sexo[1].checked) {
    genero = "f";
    generoTexto = "Mulher";
  }

  const imagemSrc = getImagem(idade, genero);
  resultado.style.textAlign = "center";
  resultado.innerHTML = `Detectamos ${generoTexto} com ${idade} anos.`;

  let foto = document.getElementById("foto");
  if (!foto) {
    foto = document.createElement("img");
    foto.id = "foto";
    resultado.appendChild(foto);
  }
  
  foto.src = imagemSrc;
}

verificar.addEventListener("click", calcularIdade);
