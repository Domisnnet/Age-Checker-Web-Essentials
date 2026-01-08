document.addEventListener('DOMContentLoaded', () => {
  const verificarBtn = document.getElementById('verificar-btn');
  if (verificarBtn) {
    verificarBtn.addEventListener('click', verificar);
  }
});

function verificar() {
  const data = new Date();
  const anoAtual = data.getFullYear();
  const fano = document.getElementById("txtano");
  const anoFeedback = document.getElementById("ano-feedback");
  const res = document.querySelector("div#res");

  // Limpa o estado de erro anterior
  fano.classList.remove('is-invalid');
  anoFeedback.textContent = '';

  const anoNascimento = Number(fano.value);

  // Validação do ano
  if (fano.value.length === 0 || isNaN(anoNascimento)) {
    fano.classList.add('is-invalid');
    anoFeedback.textContent = 'Por favor, insira um ano válido.';
    return;
  } 

  if (anoNascimento > anoAtual || anoNascimento < 1900) {
    fano.classList.add('is-invalid');
    anoFeedback.textContent = `O ano deve estar entre 1900 e ${anoAtual}.`;
    return;
  }

  const fsex = document.getElementsByName("radsex");
  const idade = anoAtual - anoNascimento;
  let gênero = "";
  let img = document.createElement("img");
  img.setAttribute("id", "foto");

  // Define o gênero e a imagem
  if (fsex[0].checked) {
    gênero = "Homem";
    img.src = getImagem(idade, "m");
  } else if (fsex[1].checked) {
    gênero = "Mulher";
    img.src = getImagem(idade, "f");
  }

  // Exibe a informação no elemento "res"
  res.style.textAlign = "center";
  res.innerHTML = `Detectamos: ${gênero} com idade ${idade} Anos.`;
  res.appendChild(img);

  // Adiciona tratamento de erro para a imagem
  img.onerror = function () {
    res.innerHTML += "<p>Imagem não encontrada.</p>";
  };
}

// Função para obter o caminho da imagem
function getImagem(idade, sexo) {
  if (idade >= 0 && idade < 10) {
    return `./src/imagens/foto-bebe-${sexo}.png`;
  } else if (idade < 21) {
    return `./src/imagens/foto-jovem-${sexo}.png`;
  } else if (idade < 50) {
    return `./src/imagens/foto-adulto-${sexo}.png`;
  } else {
    return `./src/imagens/foto-idoso-${sexo}.png`;
  }
}