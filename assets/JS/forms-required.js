// Seleciona o formulário, os campos obrigatórios e os spans de erro
const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
// Define uma expressão regular para validar o formato do email
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;

// Adiciona um evento de submit ao formulário
form.addEventListener('submit', (Event) => {
    // Previne o comportamento padrão do evento de submit
    Event.preventDefault();
    // Chama as funções de validação do nome e do email
    nameValidate();
    emailValidate();
})

// Função para exibir o erro em um campo específico
function setErro(index) {
    // Altera a borda do campo para vermelho
    campos[index].style.border = '2px solid #ff0000';
     // Exibe o span de erro correspondente
    spans[index].style.display = 'block';
}

// Função para remover o erro de um campo específico
function removeError(index) {
    // Remove a borda vermelha do campo
    campos[index].style.border = '';
    // Esconde o span de erro correspondente
    spans[index].style.display = 'none';
}

// Função para validar o nome
function nameValidate() {
     // Verifica se o nome tem menos de 4 caracteres
    if (campos[0].value.length < 4) {
        // Exibe o erro no campo do nome
        setErro(0);
    }
    else {
        // Remove o erro do campo do nome
        removeError(0);
    }
}

// Função para validar o email
function emailValidate() {
    // Verifica se o email não está no formato correto
    if (!emailRegex.test(campos[1].value)) {
        // Exibe o erro no campo do email
        setErro(1);
    }
    else {
        // Remove o erro do campo do email
        removeError(1);
    }
}

