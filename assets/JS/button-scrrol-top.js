// Quando o usuário rola a página, a função scrollFunction() é chamada
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Se a posição de rolagem do corpo do documento ou do elemento raiz do documento for maior que 175
  if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
    // O botão com o id "myBtnScroll" é exibido (display: flex)
    document.getElementById("myBtnScroll").style.display = "flex";
  } else {
    // Se a posição de rolagem for menor ou igual a 175, o botão é ocultado (display: none)
    document.getElementById("myBtnScroll").style.display = "none";
  }
}

function topFunction() {
  // A função scrollTo faz a página rolar suavemente até o topo (posição 0)
  window.scrollTo({top: 0, behavior: 'smooth'});
}
