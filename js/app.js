import { getImageForAge } from "./utils/image-service.js";

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

  if (sexo[0].checked) {
    genero = "Homem";
  } else if (sexo[1].checked) {
    genero = "Mulher";
  }

  const imagem = getImageForAge(idade, genero);
  resultado.style.textAlign = "center";
  resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
  
  const foto = document.getElementById("foto");
  if (foto) {
    foto.src = imagem;
  } else {
    const novaFoto = document.createElement("img");
    novaFoto.id = "foto";
    novaFoto.src = imagem;
    resultado.appendChild(novaFoto);
  }
}

verificar.addEventListener("click", calcularIdade);
