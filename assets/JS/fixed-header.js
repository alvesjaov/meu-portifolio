// Adiciona um evento de rolagem à janela
window.addEventListener('scroll', function () {
    // Seleciona o elemento com a classe 'cabecalho'
    const menu = document.querySelector('.cabecalho');
    // Verifica se a posição de rolagem é maior que 100 pixels
    if (window.scrollY > 100) {
        // Adiciona a classe 'fixed' ao elemento
        menu.classList.add('.fixed');
    } else {
        // Remove a classe 'fixed' do elemento
        menu.classList.remove('.fixed');
    }
});

