// Adiciona um ouvinte de evento para o evento de rolagem (scroll) na janela
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  // Obtém o elemento com o id "myBtnScroll"
  let myBtnScroll = document.getElementById("myBtnScroll");
  let rightValue;

  // Verifica se a rolagem do corpo do documento ou do elemento raiz do documento é maior que 150
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    if (window.innerWidth >= 1440) {
      rightValue = "6rem";
    } 
    else if (window.innerWidth >= 1024) {
      rightValue = "1rem";
    } 
    else if (window.innerWidth >= 768) {
      rightValue = "2rem";
    } 
    else {
      rightValue = "1rem";
    }
  } 
  else {
    rightValue = "-100px";   // Se a rolagem do corpo do documento e do elemento raiz do documento for menor ou igual a 150, define o valor da direita como "-100px"
  }

  myBtnScroll.style.right = rightValue;  // Define a propriedade CSS 'right' do botão para o valor calculado
}

function topFunction() {
  // Rola a janela para o topo com um comportamento suave
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
