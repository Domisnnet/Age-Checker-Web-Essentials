<h2 id="sobre-o-projeto">1. 👶 Verificador de Idade - JavaScript 👴</h2>

![Status do Deploy](https://img.shields.io/badge/Status-Online-brightgreen)
![Tecnologias](https://img.shields.io/badge/Tecnologias-HTML%20%7C%20CSS%20%7C%20JS-blueviolet)
[![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Domisnnet/Projeto-Alura/blob/main/LICENSE)

![Verificador de Idade](src/imagens/iMac-24-1120x630.png)

Bem-vindo ao **Verificador de Idade**! Um projeto interativo desenvolvido para calcular a faixa etária de um usuário com base no ano de nascimento e gênero. Com uma interface simples e funcional, o sistema entrega um feedback visual dinâmico, adaptando imagens e mensagens para cada fase da vida.

---

## 📚 Tabela de Conteúdo

| 👶 O Projeto | 🛠️ Técnico | 🤝 Comunidade |
| :---: | :---: | :---: |
| [![1. Sobre](https://img.shields.io/badge/1%20-%20Sobre-4CAF50)](#sobre-o-projeto) | [![5. Destaques](https://img.shields.io/badge/5%20-%20Destaques-607D8B)](#destaques-tecnicos) | [![9. Código](https://img.shields.io/badge/9%20-%20Código-795548)](#codigo-fonte) |
| [![2. Techs](https://img.shields.io/badge/2%20-%20Techs-2196F3)](#tecnologias-utilizadas) | [![6. Repositório](https://img.shields.io/badge/6%20-%20Repo-009688)](#codigo-fonte) | [![10. Créditos](https://img.shields.io/badge/10%20-%20Créditos-607D8B)](#créditos) |
| [![3. Acessar](https://img.shields.io/badge/3%20-%20Acessar-FF9800)](#como-acessar) | [![7. Contribuir](https://img.shields.io/badge/7%20-%20Contribuir-3F51B5)](#como-contribuir) | [![11. Licença](https://img.shields.io/badge/11%20-%20Licença-E91E63)](#licenca) |
| [![4. Funções](https://img.shields.io/badge/4%20-%20Funções-9C27B0)](#funcionalidades) | [![8. FAQ](https://img.shields.io/badge/8%20-%20FAQ-FFC107)](#faq) | [![12. Perfil](https://img.shields.io/badge/12%20-%20Perfil-212121)](#perfil-do-github) |

---

<h2 id="tecnologias-utilizadas">2. ⚙️ Tecnologias Utilizadas</h2>

| Camada | Tecnologias | Descrição |
| :--- | :--- | :--- |
| **Frontend** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Estrutura semântica e estilização para interface amigável. |
| **Lógica** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Cálculo de idade, validação de dados e troca de imagens. |
| **IA Support** | ![Gemini](https://img.shields.io/badge/Gemini-8E75C2?style=flat-square&logo=googlegemini&logoColor=white) | Auxílio na refatoração de código e padronização documental. |

---

<h2 id="como-acessar">3. 🚀 Como Acessar</h2>

Clique no botão abaixo para iniciar o Verificador de Idade diretamente no seu navegador:

<div align="left">
  <a href="https://domisnnet.github.io/Projeto-Alura/" target="_blank">
    <img alt="Botão Acessar" src="src/imagens/botão.webp" height="70" width="70" />
  </a>
</div>

---

<h2 id="funcionalidades">4. 🧩 Funcionalidades Principais</h2>

O projeto foca em simplicidade e feedback instantâneo para o usuário:

| Funcionalidade | Descrição |
| :--- | :--- |
| 🧮 **Cálculo Preciso** | Processamento automático da idade com base no ano atual. |
| 🖼️ **Imagens Dinâmicas** | Exibição de fotos específicas para crianças, jovens, adultos e idosos. |
| ⚧️ **Seleção de Gênero** | Lógica adaptativa para resultados masculinos e femininos. |
| ⚠️ **Validação de Erro** | Tratamento para campos vazios ou anos de nascimento inválidos. |
| 📱 **Design Adaptável** | Interface limpa que permite a verificação em diferentes telas. |

---

<h2 id="destaques-tecnicos">5. 💻 Destaques Técnicos</h2>

Neste projeto, os principais desafios técnicos superados foram:

### 🔄 Manipulação Dinâmica do DOM
Uso intensivo de JavaScript para alterar o conteúdo de `<div>` e atributos `src` de imagens sem a necessidade de recarregar a página, garantindo uma experiência fluida.

### 📐 Condicionais Encadeadas
Implementação de uma estrutura lógica robusta para classificar corretamente a faixa etária e o gênero, garantindo que a imagem correta seja carregada para cada combinação possível.

---

<h2 id="como-contribuir">7. 🤝 Como Contribuir</h2>

Siga os passos abaixo para fortalecer este projeto:

| Fase | Ação | Link / Comando |
| :---: | :--- | :--- |
| **01** | **Fork** | [![Fork](https://img.shields.io/badge/-Fazer%20Fork-blue?style=flat-square&logo=github)](https://github.com/Domisnnet/Projeto-Alura/fork) |
| **02** | **Branch** | `git checkout -b feature/MinhaMelhoria` |
| **03** | **Commit** | `git commit -m 'feat: melhoria na validação de ano'` |
| **04** | **Push** | `git push origin feature/MinhaMelhoria` |
| **05** | **PR** | [![Abrir PR](https://img.shields.io/badge/-Abrir%20PR-green?style=flat-square&logo=git)](https://github.com/Domisnnet/Projeto-Alura/compare) |

---

<h2 id="faq">8. 🧠 Perguntas Frequentes</h2>

<details>
<summary><strong>O cálculo considera o mês de nascimento ❓</strong></summary>
<p>📅 <strong>Resposta:</strong> Atualmente o cálculo é baseado apenas na subtração do ano atual pelo ano informado. Uma melhoria futura prevista é a inclusão de meses para maior precisão.</p>
</details>

<details>
<summary><strong>Como as imagens são carregadas ❓</strong></summary>
<p>🖼️ <strong>Resposta:</strong> As imagens são alteradas dinamicamente via JavaScript através do método <code>img.setAttribute('src', 'caminho/da/imagem.png')</code> baseado no resultado da lógica condicional.</p>
</details>

<details>
<summary><strong>O projeto é responsivo para Mobile ❓</strong></summary>
<p>📱 <strong>Resposta:</strong> Sim! Utilizamos CSS moderno para garantir que o container central se ajuste corretamente em telas menores, mantendo a legibilidade do formulário.</p>
</details>

<details>
<summary><strong>Posso usar este código para meus estudos ❓</strong></summary>
<p>🤝 <strong>Resposta:</strong> Com certeza. O projeto é Open Source sob a licença MIT. Sinta-se à vontade para clonar, estudar a lógica e adaptar para suas necessidades.</p>
</details>

---

<h2 id="codigo-fonte">9. 💻 Código Fonte</h2>

Deseja analisar a estrutura do projeto? Explore o repositório oficial:

[![Repositório](https://img.shields.io/badge/Repositório-Domisnnet%2FProjeto--Alura-1DB954?style=for-the-badge&logo=github)](https://github.com/Domisnnet/Projeto-Alura)

---

<h2 id="créditos">10. 📝 Créditos & Reconhecimentos</h2>

O **Verificador de Idade** é fruto de estudos práticos e colaboração tecnológica:

| Atribuição | Responsável / Recurso | Descrição |
| :--- | :--- | :--- |
| **Arquitetura & Dev** | **DomisDev** | Desenvolvimento da lógica, estrutura HTML e estilização CSS. |
| **Educação** | **Alura** | Base de conhecimento e fundamentos de lógica de programação. |
| **Apoio Técnico** | **Google Gemini** | Auxílio na revisão de código e padronização documental. |
| **Assets Visuais** | **DomisDev** | Seleção e tratamento das imagens ilustrativas do projeto. |

### 🎯 Missão do Projeto
> "Este projeto foi construído para demonstrar como conceitos fundamentais de JavaScript podem criar ferramentas úteis, focando na prática de manipulação de elementos e experiência do usuário."

---

<h2 id="licenca">11. 📄 Licença</h2>

Este projeto está licenciado sob a [![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Domisnnet/Projeto-Alura/blob/main/LICENSE)

---

<h2 id="perfil-do-github">12. 👨‍💻 Perfil do GitHub</h2>

<a href="https://github.com/Domisnnet"> <img src="src/imagens/DomisDev.png" width="120" alt="Acessar perfil GitHub"> </a>

---
# 👶 Verificador de Idade JavaScript 👴

<p align="center">
  <img src="src/imagens/iMac-24-1120x630.png" alt="Demonstração do Verificador de Idade" width="100%">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

> Um projeto interativo desenvolvido para calcular a idade com base no ano de nascimento e gênero, exibindo resultados personalizados com imagens dinâmicas. Ideal para praticar lógica de programação e manipulação do DOM.

---

## 🚀 Demonstração

Deseja testar a lógica agora mesmo? Acesse o projeto online através do link abaixo:

**[👉 Acessar Verificador de Idade](https://domisnnet.github.io/Projeto-Alura/)**

---

## 💡 Visão Geral

Este projeto foi construído durante a minha jornada de aprendizado na **Alura**, com o suporte estratégico do **Gemini**, para explorar como o JavaScript pode interagir com o usuário em tempo real através da manipulação de formulários e elementos visuais.

### ✨ Funcionalidades
* **Cálculo Instantâneo:** Processamento imediato da idade baseada no ano atual.
* **Feedback Visual Dinâmico:** Troca de imagens conforme a faixa etária detectada.
* **Interface Amigável:** Design limpo e intuitivo para qualquer dispositivo.
* **Acessibilidade:** Uso correto de labels e elementos semânticos.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
| :--- | :--- |
| **HTML5** | Estruturação semântica da interface. |
| **CSS3** | Estilização moderna e responsividade. |
| **JavaScript (ES6+)** | Lógica de cálculo, validação e troca de imagens. |
| **Google Gemini** | Auxílio na refatoração e otimização de código. |

---

## ⚙️ Como Participar da Brincadeira?

O funcionamento é simples e direto:

1.  **Input:** Digite o ano em que você veio ao mundo.
2.  **Gênero:** Selecione a opção Masculino ou Feminino.
3.  **Resultado:** Clique em **Verificar** para ver a revelação da sua idade aparecer com uma imagem ilustrativa correspondente!

---

## 🤝 Contribuições

Este deck é aberto para melhorias! Siga os passos para fortalecer o código:

1.  🍴 **Fork:** Adicione este projeto ao seu perfil.
2.  🌿 **Branch:** Crie uma branch para suas atualizações (`git checkout -b minha-contribuicao`).
3.  ✍️ **Commit:** Guarde suas mudanças com mensagens claras.
4.  🚀 **Push:** Envie para o seu repositório.
5.  ⚔️ **Pull Request:** Abra uma solicitação de mesclagem para análise.

---

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 🧑‍💻 Autor

Desenvolvido com ❤️ por **DomisDev**.

<a href="https://github.com/Domisnnet">
    <img src="src/imagens/DomisDev.png" width="80px" style="border-radius: 50%" alt="Avatar do Autor">
    <br>
    <sub><b>@DomisDev</b></sub>
</a>

---

**Pronto para interagir? Clique, descubra e divirta-se!** ✨👶👴
# 👶 Verificador de Idade JavaScript 👴

![Verificador](src/imagens/iMac-24-1120x630.png)

Um projeto simples e divertido para calcular a idade de uma pessoa com base no ano de nascimento e sexo. Ideal para iniciantes em JavaScript!

---

## 🚀 Como Usar o Verificador?

1.  **Comece Agora:**
    Clique no botão abaixo para usar o verificador:

<a href="https://domisnnet.github.io/Projeto-Alura/" target="_blank" rel="noopener noreferrer">
    <img src="src/imagens/botão.webp" width="35px" height="35px" alt="Acesse">
</a>

---

## 💡 Visão Geral

Este projeto consiste em um verificador de idade interativo construído com HTML, CSS e JavaScript. Ele permite que os usuários insiram seu ano de nascimento e sexo, calcule a idade resultante e exiba uma mensagem personalizada com base na idade. É uma ótima maneira para desenvolvedores iniciantes praticarem suas habilidades e aprenderem os fundamentos do desenvolvimento web.

## 🛠️ Tecnologias Utilizadas

![HTML](https://img.shields.io/badge/HTML-5-orange?style=flat-square&logo=html5 "HTML")
![CSS](https://img.shields.io/badge/CSS-3-blue?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=flat-square&logo=javascript)

- **HTML:** Estrutura da página.
- **CSS:** Estilo visual da página.
- **JavaScript:** Lógica para cálculo da idade e manipulação da interface.

## ✨ Funcionalidades

- **Interface Amigável:** Design simples e intuitivo.
- **Entrada de Dados:** Formulário para inserir o ano de nascimento e selecionar o sexo.
- **Cálculo Automático:** Idade calculada instantaneamente após a inserção dos dados.
- **Mensagem Personalizada:** Exibe uma mensagem com base na idade calculada.
- **Acessibilidade:** Implementação de labels para todos os campos de formulário para melhor experiência do usuário.

## Verificação de Idade ⚙️

**Prepare-se para desvendar o mistério da sua idade!** 🕵️‍♀️ Este projeto, nascido da minha jornada de aprendizado na Alura e turbinado pela inteligência do Gemini, convida você a uma experiência digital simples, mas cativante.

**Como participar da brincadeira:**

1.  **Insira seu ano de nascimento:** Digite o ano em que você veio ao mundo no campo indicado.
2.  **Escolha seu gênero:** Selecione a opção que melhor te representa: masculino ou feminino.
3.  **Clique em "Verificar":** Aperte o botão mágico e... TCHARAM! ✨ A revelação da sua idade aparecerá como num passe de mágica! E com uma imagem ilustrativa!

**Por que este projeto é especial?**

- **Interatividade:** Uma interface amigável e direta para uma experiência leve e divertida.
- **Aprendizado na prática:** Uma vitrine do meu progresso como desenvolvedor web, combinando os ensinamentos da Alura com o poder do Gemini.
- **Simplicidade com propósito:** Demonstra como conceitos básicos de programação podem criar ferramentas úteis e interessantes.

**Então, o que você está esperando?** 🤔 Descubra sua idade de uma forma inovadora e veja a mágica acontecer!

## 🤝 Contribuições

<div style="background-color: #f0f0f0; padding: 20px; border-radius: 10px; border: 2px solid #222;">
    <p style="margin-bottom: 10px; font-weight: bold; color: #0056b3; text-align: center;">
      <span style="display:inline-block; margin-right: 5px;"> 👐 </span> Siga os passos para fortalecer este deck:
    </p>
    <ul style="list-style-type: none; padding: 0; margin: 0;">
      <li style="margin-bottom: 10px;">
           <span style="font-weight: bold; color: #1c7430;">1. 🍴 <a href="https://github.com/Domisnnet/Projeto-Alura/fork" target="_blank" style="color: #1c7430; text-decoration: underline;">Faça um fork</a>:</span> Adicione este projeto ao seu deck.
      </li>
      <li style="margin-bottom: 10px;">
          <span style="font-weight: bold; color: #1c7430;">2. 🌿 Crie uma branch:</span> Prepare suas atualizações. <a href="https://www.atlassian.com/br/git/tutorials/using-branches" target="_blank" style="color: #1c7430; text-decoration: underline;">Tutorial sobre Branches</a>
      </li>
      <li style="margin-bottom: 10px;">
          <span style="font-weight: bold; color: #1c7430;">3. ✍️ Prepare seus commits:</span> Guarde suas mudanças. <a href="https://www.atlassian.com/br/git/tutorials/saving-changes/git-commit" target="_blank" style="color: #1c7430; text-decoration: underline;">Tutorial sobre Commits</a>
      </li>
     <li style="margin-bottom: 10px;">
          <span style="font-weight: bold; color: #1c7430;">4. 🚀 Envie:</span> Lance sua sugestão (`git push origin minha-contribuicao`).
      </li>
      <li>
           <span style="font-weight: bold; color: #1c7430;">5. ⚔️ <a href="https://github.com/Domisnnet/Projeto-Alura/compare" target="_blank" style="color: #1c7430; text-decoration: underline;">Abra um Pull Request</a>:</span> Desafie este deck original.
      </li>
      <li>
           <span style="font-weight: bold; color: #1c7430;">6. 🐛 <a href="https://github.com/Domisnnet/Projeto-Alura/issues" target="_blank" style="color: #1c7430; text-decoration: underline;">Reportar um problema/Sugestão (Issues)</a></span>
      </li>
    </ul>
</div>

---

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 🧑‍💻 Para Desenvolvedores

- **Código Limpo:** O código foi escrito com foco na legibilidade e organização.
- **Comentários:** Funções importantes estão documentadas para facilitar a compreensão.
- **Boas Práticas:** O código segue as boas práticas de desenvolvimento web.

### 🚀 Próximos Passos

- **Validação:** Adicionar validação para garantir que os dados inseridos sejam válidos.
- **Precisão:** Aprimorar o cálculo da idade para considerar o dia e o mês de nascimento.
- **Testes:** Implementar testes unitários para garantir a qualidade do código.
- **Responsividade:** Tornar a interface responsiva para dispositivos móveis.

## 📚 Recursos Adicionais (Para Iniciantes)

- [MDN Web Docs](https://developer.mozilla.org/pt-BR/): A melhor fonte de documentação sobre HTML, CSS e JavaScript.
- [FreeCodeCamp](https://www.freecodecamp.org/): Plataforma online com cursos gratuitos de programação.
- [Alura](https://www.alura.com.br/): Plataforma online com cursos de tecnologia (inclui cursos de HTML, CSS e JavaScript).

## 😄 Autor

- **Desenvolvedor:** **DomisDev**
- **Imagens:** Criadas especificamente para este projeto.

---

Feito com ❤️ por:

<a href="https://github.com/Domisnnet">
    <img src="src/imagens/DomisDev.png" width="60px" height="60px" alt="Acessar perfil GitHub">
    DomisDev
</a>

---

**Pronto para interagir? - clique, descubra e divirta-se!** ✨👶👴
