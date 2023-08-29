// Seleciona o botão do hambúrguer e o menu de navegação
const hamburger = document.querySelector(".menu__hamburgue");
const navMenu = document.querySelector(".navegacao__menu");

// Adiciona um evento de clique ao botão do hambúrguer
hamburger.addEventListener("click", () => {
    // Alterna a classe "active" do botão do hambúrguer e do menu de navegação
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Adiciona um evento de clique a cada link de navegação
document.querySelectorAll(".navegacao__link").forEach(n => n.addEventListener("click", () => {
    // Remove a classe "active" do botão do hambúrguer e do menu de navegação
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

