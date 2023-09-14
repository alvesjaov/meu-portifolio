// Seleciona o elemento HTML com o id 'form'
const form = document.getElementById('form');
// Seleciona todos os elementos HTML com a classe 'required'
const campos = document.querySelectorAll('.required');
// Seleciona todos os elementos HTML com a classe 'span-required'
const spans = document.querySelectorAll('.span-required');
// Define uma expressão regular para validar endereços de e-mail
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Função para exibir um erro em um campo específico
function setErro(index) {
  campos[index].style.border = '2px solid var(--color-red)';
  spans[index].style.display = 'block';
}

// Função para remover o erro de um campo específico
function removeError(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

// Função para validar o campo do nome
function nameValidate() {
  if (campos[0].value.length < 4) {
    setErro(0);
  }
  else {
    removeError(0);
  }
}

// Função para validar o campo do e-mail
function emailValidate() {
  if (!emailRegex.test(campos[1].value)) {
    setErro(1);
  }
  else {
    removeError(1);
  }
}

// Classe para lidar com o envio do formulário
class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    this.dialogBox = document.getElementById('dialogBox');
    this.dialogMessage = document.getElementById('dialogMessage');
    this.okButton = document.getElementById('okButton');
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.okButton.addEventListener('click', this.closeDialog);
  }

  // Exibe uma mensagem de sucesso
  displaySuccess() {
    this.showDialog(this.settings.success);
  }

  // Exibe uma mensagem de erro
  displayError() {
    this.showDialog(this.settings.error);
  }

  // Exibe a caixa de diálogo com uma mensagem específica
  showDialog(message) {
    this.dialogMessage.innerText = message;
    this.dialogBox.style.visibility = 'visible';
  }

  // Fecha a caixa de diálogo e reseta o formulário
  closeDialog() {
    this.dialogBox.style.visibility = 'hidden';
    this.form.reset();
    this.formButton.disabled = false;
    this.formButton.innerText = 'Enviar';
  }

  // Obtém os dados do formulário como um objeto
  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  // Lida com a submissão do formulário
  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  // Envia o formulário
  async sendForm(event) {
    try {
      // Chamando a função onSubmission
      this.onSubmission(event);

      // Validando nome e email
      nameValidate();
      emailValidate();

      // Verificando se há erros de validação
      const errors = document.querySelectorAll('.span-required');
      for (let i = 0; i < errors.length; i++) {
        if (errors[i].style.display === 'block') {
          throw new Error('Erro de validação');
        }
      }

      // Enviando os dados do formulário para a URL especificada
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });

      // Exibindo mensagem de sucesso após o envio dos dados
      this.displaySuccess();
    } catch (error) {
      // Tratando erros de validação e outros erros
      if (error.message === 'Erro de validação') {
        this.formButton.disabled = false;
        this.formButton.innerText = 'Enviar';
      } else {
        this.displayError();
      }

      throw new Error(error);
    }
  }

  // Inicializa a instância da classe
  init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}

// Cria uma nova instância da classe 'FormSubmit' e inicializa-a
const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "Mensagem enviada!",
  error: "Não foi possível enviar sua mensagem.",
});
formSubmit.init();