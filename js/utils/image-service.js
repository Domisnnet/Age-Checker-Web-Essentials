/* =========================
  Caminho das Imagens
========================== */
export function getImagem(idade, sexo) {
  if (idade >= 0 && idade < 10) {
    return `./src/images/foto-bebe-${sexo}.png`;
  } else if (idade < 21) {
    return `./src/images/foto-jovem-${sexo}.png`;
  } else if (idade < 50) {
    return `./src/images/foto-adulto-${sexo}.png`;
  } else {
    return `./src/images/foto-idoso-${sexo}.png`;
  }
}