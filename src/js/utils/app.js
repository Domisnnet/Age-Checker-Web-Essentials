import { getImagem } from './utils/image-service.js';

function validarAno(anoNascimento, anoAtual) {
  if (isNaN(anoNascimento) || anoNascimento < 1900 || anoNascimento > anoAtual) {
    return false;
  }
  return true;
}

function verificar() {
  const data = new Date();
  const anoAtual = data.getFullYear();
  const fano = document.getElementById("txtano");
  const anoFeedback = document.getElementById("ano-feedback");
  const res = document.querySelector("div#res");

  fano.classList.remove('is-invalid');
  anoFeedback.textContent = '';

  const anoNascimento = Number(fano.value);

  if (!validarAno(anoNascimento, anoAtual)) {
    fano.classList.add('is-invalid');
    anoFeedback.textContent = `Por favor, insira um ano válido entre 1900 e ${anoAtual}.`;
    return;
  }

  const fsex = document.getElementsByName("radsex");
  const idade = anoAtual - anoNascimento;
  const gênero = fsex[0].checked ? "Homem" : "Mulher";
  const sexo = fsex[0].checked ? "m" : "f";

  const img = document.createElement("img");
  img.setAttribute("id", "foto");
  img.src = getImagem(idade, sexo);

  res.style.textAlign = "center";
  res.innerHTML = `Detectamos: ${gênero} com idade de ${idade} anos.`;
  res.appendChild(img);

  img.onerror = function () {
    res.innerHTML += "<p>Imagem não encontrada!</p>";
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const verificarBtn = document.getElementById('verificar-btn');
  if (verificarBtn) {
    verificarBtn.addEventListener('click', verificar);
  }
});