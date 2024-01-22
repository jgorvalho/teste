
function salvarDadosProduto(id) {
  localStorage.setItem('produtoSelecionado', JSON.stringify(produtos[id]));
}

const urlParams = new URLSearchParams(window.location.search);

const parametroId = urlParams.get('id');
//Variável que guarda os dados refreentes a  cada produto. Variável referente à necessidade de adicionar novos produtos.
var produtos = {
    '1': {
      nomeProduto: 'Tshirt-Preta VALT',
      precoUnitario: 25 ,
      imagem: 'Tshirt preta.png',
      DescricaoProduto: 'T-shirt Preta estampada, 100% algodão, feito em Portugal.'
    },
    
    '2': {
      nomeProduto: 'Tshirt-Branca VALT',
      precoUnitario: 22 ,
      imagem: 'Tshirt branca.png',
      DescricaoProduto: 'T-shirt Branca estampada, 100% algodão, feito em Portugal. '
    },
  
    '3': {
      nomeProduto: 'Caneca VALT',
      precoUnitario: 8 ,
      imagem: 'canecaVALT.png',
      DescricaoProduto: 'Caneca Branca, porcelana, feita em Portugal.'
    }, 
  };
  

  // Recupera o ID do produto da URL
  var produtoId = parametroId || '1'; // Define um valor padrão se o id não estiver presente
  
  // Recupera os dados do produto atual
  var produtoSelecionado = produtos[produtoId];
  
  
  
  
  // Exibe os detalhes relativos ao produto selecionado, na página
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
  
  
  // Função para aumentar a quantidade de produtos no caso de se querer o mesmo produto mais que uma vez
  
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
  
  // Dentro do bloco de script onde se está a gerenciar a exibição do produto
  var produtoSelecionado = produtos[produtoId];
  
  // Atualizar o título da página com o nome do produto
  document.title = produtoSelecionado.nomeProduto ;

// Obter o formulário
var formulario = document.getElementById("formulario");

// Obter o botão que abre o formulário
var btn = document.getElementById("terminarbtn");

// Obter o elemento <span> que fecha o formulário
var span = document.getElementsByClassName("close")[0];

// A partir do click no botão "adicionar ao carrinho", abre o formulário 
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openformulario() {
  var formulario = document.getElementById("formulario");
  formulario.style.display = "block";
}

function closeformulario() {
  var formulario = document.getElementById("formulario");
  formulario.style.display = "none";
}

//Função que envia os dados submetidos, para o e-mail
function openEmailWindow() {
  var nome = document.getElementById('nome').value;
  var sobrenome = document.getElementById('sobrenome').value;
  var email = document.getElementById('email').value;
  var morada = document.getElementById('morada').value;

// Valida os dados, na obrigação de se encontratrem todos preenchidos
  if (!nome || !sobrenome || !email || !morada) {
    alert('Por favor, preencha o que está em falta.');
    return;
  }

//Validação do e-mail através do caracter @
  if (!email.includes('@')) {
    alert('O endereço de e-mail não é válido.');
    return;
  }


//Infromação submetida pelo utilizador que irá estar no corpo de texto do e-mail
  var corpoEmail = 'Nome: ' + nome + '\n' +
                   'Sobrenome: ' + sobrenome + '\n' +
                   'Email: ' + email + '\n' +
                   'Morada: ' + morada;

  window.location.href = 'mailto:' + email + '?subject=Detalhes da Compra&body=' + encodeURIComponent(corpoEmail);
}
  