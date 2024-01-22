let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");  // Obtém todos os elementos com a classe "mySlides" e os armazena em 'slides'.
  console.log(slides);  // Imprime os elementos 'slides' no console para depuração.
  
  if (n > slides.length) {slideIndex = 1}    //Verifica se 'n' é maior que o número total de slides. Se verdadeiro, define 'slideIndex' como 1.
  if (n < 1) {slideIndex = slides.length}    // Verifica se 'n' é menor que 1. Se verdadeiro, define 'slideIndex' como o último slide.
  for (i = 0; i < slides.length; i++) {      // Loop para ocultar todos os slides, definindo seu estilo de exibição como "none".
    slides[i].style.display = "none";  
  }
  // Exibe o slide atual (indicado por 'slideIndex') configurando seu estilo de exibição como "block".
  slides[slideIndex-1].style.display = "block";
 
}




// Salva os dados do produto selecionado no armazenamento local
function salvarDadosProduto(id) {
  localStorage.setItem('produtoSelecionado', JSON.stringify(produtos[id]));
}