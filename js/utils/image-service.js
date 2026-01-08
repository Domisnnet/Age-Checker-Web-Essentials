// Função para obter o caminho da imagem, agora como um módulo exportável
export function getImagem(idade, sexo) {
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