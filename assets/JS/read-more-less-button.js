function myFunction(moreTextId, dotsId, btnId) {
  // Obter os elementos do DOM usando os IDs fornecidos
  let moreText = document.getElementById(moreTextId); // O texto que será mostrado ou escondido
  let dots = document.getElementById(dotsId); // Os pontos que serão mostrados ou escondidos
  let btn = document.getElementById(btnId); // O botão que o usuário clica para mostrar ou esconder o texto

  // Se o texto estiver escondido (display = "none"), mostre-o
  if (moreText.style.display === "none") {
    moreText.style.display = "inline"; // Mostra o texto
    btn.innerHTML = "Ler menos"; // Muda o texto do botão para "Ler menos"
  } else {
    // Se o texto estiver sendo mostrado, esconda-o
    moreText.style.display = "none"; // Esconde o texto
    btn.innerHTML = "Ler mais"; // Muda o texto do botão para "Ler mais"
  }

  // Alterna a exibição dos pontos com base na exibição do texto
  dots.style.display = (moreText.style.display === "none") ? "inline" : "none";
}