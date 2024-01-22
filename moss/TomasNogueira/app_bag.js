const urlParams = new URLSearchParams(window.location.search);
const parametroId = urlParams.get('id');
var produtos = {
    '1': {
      nomeProduto: 'Vale de Gestaçô',
      precoUnitario: 2.10,
      imagem: 'Images Loja Digital/DSC02920.jpg',
      DescricaoProduto: 'A sua cor citrina é inconfundível, tal como a frescura. Este vinho verde-branco do Vale de Gestaçô complementa muito bem todos os pratos de carne e/ou peixe, assim como marisco.'
    },
    '2': {
      nomeProduto: 'Vale das Pedrinhas',
      precoUnitario: 2.50,
      imagem: 'Images Loja Digital/DSC02919.jpg',
      DescricaoProduto: 'Com a sua cor rosa intenso e aroma leve e frutado, surge o vinho do Vale das Pedrinhas. Para além de uma boa harmonia, resultante de uma estrutura suave, tem um final muito agradável. '
    },
  
    '3': {
      nomeProduto: 'Vale - Gerações',
      precoUnitario: 10,
      imagem: 'Images Loja Digital/DSC02922.jpg',
      DescricaoProduto: 'Com uma cor citrina, Vale - Gerações Meio Seco tem uma efervescência fina e persistente. O aroma é fresco, com notas florais, frutas brancas e ligeiras notas de pão torrado. Na boca, apresenta-se cremoso, com frescura e leveza conferida por uma acidez viva mas equilibrada. O seu final é elegante, doce e aromático'
    },

    '4': {
        nomeProduto: 'Vale - Gerações',
        precoUnitario: 10,
        imagem: 'Images Loja Digital/DSC02923.jpg',
        DescricaoProduto: 'Com uma cor citrina, Vale - Gerações Meio Seco tem uma efervescência fina e persistente. O aroma é fresco, com notas florais, frutas brancas e ligeiras notas de pão torrado. Na boca, apresenta-se cremoso, com frescura e leveza conferida por uma acidez viva mas equilibrada. O seu final é elegante, doce e aromático'
      }

  };
  
  // Recupera o ID do produto da URL
  var produtoId = parametroId || '1'; // Define um valor padrão se o id não estiver presente
  
  // Recupera os dados do produto atual
  var produtoSelecionado = produtos[produtoId];
  
  
  
  
  // Exibe os detalhes do produto na página
  document.getElementById('nomeProduto').innerHTML = produtoSelecionado.nomeProduto;
  document.getElementById('precoUnitario').innerHTML =  produtoSelecionado.precoUnitario.toFixed(2)   +  '&euro; ' ;
  document.getElementById('imagemProduto').src = produtoSelecionado.imagem;
  document.getElementById('DescricaoProduto').innerHTML = produtoSelecionado.DescricaoProduto;
  
  
  
  // Função para atualizar os valores da página
  function atualizarValores() {
    var quantidade = parseInt(document.getElementById('quantidade').innerHTML, 10);
    var precoUnitario = parseFloat(document.getElementById('precoUnitario').innerHTML);
    var valorFinal = (precoUnitario * quantidade).toFixed(2);
  
    // Atualiza os valores na página 
    document.getElementById('valorFinal').innerHTML = valorFinal + '&euro; ';
  }
  
  
  // Função para aumentar a quantidade
  
  function aumentarQuantidade() {
    var quantidadeSpan = document.getElementById('quantidade');
    quantidadeSpan.innerHTML = (parseInt(quantidadeSpan.innerHTML, 10) + 1).toString();
    atualizarValores();
  }
  
  // Função para diminuir a quantidade
  function diminuirQuantidade() {
    var quantidadeSpan = document.getElementById('quantidade');
    var novaQuantidade = parseInt(quantidadeSpan.innerHTML, 10) - 1;
    quantidadeSpan.innerHTML = (novaQuantidade > 0 ? novaQuantidade : 1).toString();
    atualizarValores();
  }
  
  // Inicializa os valores na primeira carga da página
  atualizarValores();

  // Dentro do bloco de script onde você está gerenciando a exibição do produto
  var produtoSelecionado = produtos[produtoId];
  
  // Atualizar o título da página com o nome do produto
  document.title = produtoSelecionado.nomeProduto ;

// Obtenha o modal
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
  var idade = document.getElementById('idade').value;
  var nif = document.getElementById('nif').value;

  // Validate the form data
  if (!nome || !sobrenome || !email || !idade) {
    alert('Please fill out all fields.');
    return;
  }

  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  if (idade < 18) {
    alert('You must be at least 18 years old.');
    return;
  }

  var corpoEmail = 'Nome: ' + nome + '\n' +
                   'Sobrenome: ' + sobrenome + '\n' +
                   'Email: ' + email + '\n' +
                   'Idade: ' + idade + '\n' +

                   'Dados de faturação' + '\n' +
                   'NIF: ' + nif + '\n';
                   

  window.location.href = 'mailto:' + email + '?subject=Detalhes da Compra&body=' + encodeURIComponent(corpoEmail);
}
  