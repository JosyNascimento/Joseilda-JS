/* nav"responsive" class para a nav */
function myFunction() {
    var x = document.getElementById("menu-icon");
    if (x.className === "navbar") {
      x.className += "responsive";
    } else {
      x.className = "navbar";
    }
  } 

const form = document. querySelector("#form");
const emailInput = document.querySelector("#password");
const passwordInput = document.querySelector("#password");
const imoveisselect = document.querySelector("#imoveis");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    //verica se o nome está vazio

    if (nameInput.value ==="") {
    alert("Por favor, preencha o seu nome.");
    return;
}

// verifica se o email estápreenchido e válido

if (emailInput.value ===""|| listEmailvalid(emailInout.value)) {
    alert("Por favor, preencha o seu email.");
    return;

}

// verifica se a senha está preenchida

if (!validatePassword(passwordInput.value, 8)) {
    alert("preencha a senha com no mínimo 8 digitos.");
    return;

}
//verificar se a situação foi selecionada
if(imoveisSelect.value ==="") {
    alert ("Por favor, selecione uma opção");
    return;
}

//verifique se a mensagem esta preenchida
if(messageTextarea.value === "") {
    alert ("Por favor escreva a sua menssagem");
    return;
}

console.log (messageTextarea)

    //se os campos estiverem preenchidos corretamente, enviar form

form.submit();
});

//função que valida email
function isEmailValid(email) {
    // cria uma regex para validar email

    const emailRegex = new RegEx(
    /^[a-zA-z0-9._-]+@[a-zA-A0-9._-]+\.[a-zZ-z]{2,}$/
   
    );

    if(emailRegex.text(email)) {
        return true;
    }

    return false;
}

//function que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        return true
    }
    return false
}


document.addEventListener('DOMContentLoaded', (event) => {
    const resetButton = document.querySelector('form button[type="reset"]');
    resetButton.addEventListener('click', function(event) {
      const confirmation = confirm('Tem certeza de que deseja limpar o formulário?');
      if (!confirmation) {
        event.preventDefault(); // Impede a limpeza do formulário se a confirmação for negativa
      }
    });
  });


  function limparFormulario() {
    document.getElementById("contactForm").reset();
  }

  // Função para enviar o formulário via Fetch
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Coleta os dados do formulário
    const formData = new FormData(this);

    // Envia os dados do formulário via Fetch
    fetch('enviar-contato.php', {
      method: 'POST',
      body: formData
    })
    
    .then(response => {
      if (!response.ok) {
        throw new Error('Ocorreu um erro ao enviar o formulário.');
      }
      return response.text();
    })
    .then(data => {
      console.log('Resposta do servidor:', data);
      
      alert('Formulário enviado com sucesso!');
    })
    .catch(error => {
      console.error('Erro:', error);
    
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.');
    });
  });


  //footer responssivo
document.addEventListener('DOMContentLoaded', function() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  document.body.appendChild(footer);
});