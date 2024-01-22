var modal = document.getElementById("modal");

// Obtenha o botão que abre o modal
var btn = document.getElementById("End_btn");

// Obtenha o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abra o modal 
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

function openEmailWindow() {
  var nome = document.getElementById('nome').value;
  var sobrenome = document.getElementById('sobrenome').value;
  var email = document.getElementById('email').value;

  // Validate the form data
  if (!nome || !sobrenome || !email ) {
    alert('Please fill out all fields.');
    return;
  }

  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  var corpoEmail = 'Nome: ' + nome + '\n' +
                   'Sobrenome: ' + sobrenome + '\n' +
                   'Email: ' + email;

  window.location.href = 'mailto:' + email + '?subject=Detalhes da Compra&body=' + encodeURIComponent(corpoEmail);
}