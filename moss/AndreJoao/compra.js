const urlParams = new URLSearchParams(window.location.search);
const selectedColor = decodeURIComponent(urlParams.get('color')) || 'white';
const productName = decodeURIComponent(urlParams.get('name'));
const productPrice = decodeURIComponent(urlParams.get('price'));
const productImage = decodeURIComponent(urlParams.get('image'));
const corFinalButton = document.querySelector('.cor-final');
const discountInput = document.querySelector('.discount-input');

corFinalButton.style.backgroundColor = `${selectedColor}`;

function toggleCheckboxColor() {
  let checkbox = document.querySelector('.checkbox');
  checkbox.style.backgroundColor = (checkbox.style.backgroundColor === 'white') ? 'black' : 'white';
}

function selectPaymentMethod(button) {
  document.querySelectorAll('.pagamento').forEach(btn => {
    btn.style.backgroundColor = 'rgb(255, 255, 255)';
    btn.style.color = 'rgb(0, 0, 0)';
  });
  button.style.backgroundColor = 'black';
  button.style.color = 'white';

  // Add or remove the 'active' class to track the selected payment method
  document.querySelectorAll('.pagamento').forEach(btn => {
    btn.classList.remove('active');
  });
  button.classList.add('active');
}

document.getElementById('nome-final').innerText = productName;
document.getElementById('preco-final').innerText = productPrice;

const imageFinal = document.getElementById('image-final');
if (productImage) {
  imageFinal.src = productImage;
}

function redirectToHomePage() {
  const homePageUrl = 'site.html';
  window.location.href = homePageUrl;
}

function calculatePrices() {
  const subtotalElement = document.getElementById('subtotal');
  const portesEnvioElement = document.getElementById('portes-envio');
  const totalElement = document.getElementById('total');
  const quantityInput = document.getElementById('quantity');

  let quantity = parseInt(quantityInput.value) || 1;
  quantity = Math.max(1, quantity);
  quantityInput.value = quantity;

  const subtotalValue = quantity * parseFloat(productPrice);
  subtotalElement.innerText = `${subtotalValue.toFixed(2)}€`;

  const portesEnvioValue = subtotalValue >= 10 ? 0 : 5;
  portesEnvioElement.innerText = `${portesEnvioValue.toFixed(2)}€`;

  const discountCode = discountInput.value.toLowerCase();
  let descontoValue = 0;

  if (discountCode.includes('free')) {
    descontoValue = subtotalValue;
    document.getElementById('desconto').innerText = `${descontoValue.toFixed(2)}€`;
    totalElement.innerText = '0.00€';
  } else {
    document.getElementById('desconto').innerText = '0.00€';
    const totalValue = subtotalValue - descontoValue + portesEnvioValue;
    totalElement.innerText = `${totalValue.toFixed(2)}€`;
  }
}

function handleDiscountInput() {
  calculatePrices();
}

function openEmailWindow() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email || !validateEmail(email)) {
    alert('Por favor, seleciona um método de pagamento, preenche o nome, e insere um e-mail válido.');
    return;
  }

  const selectedPaymentMethod = document.querySelector('.flex-pagamentos button.active');
  const paymentMethodText = selectedPaymentMethod ? selectedPaymentMethod.innerText : '';

  const productName = document.getElementById('nome-final').innerText;
  const productColor = document.getElementById('corFinal').style.backgroundColor;
  const quantity = document.getElementById('quantity').value;
  const subtotal = document.getElementById('subtotal').innerText;
  const desconto = document.getElementById('desconto').innerText;
  const portesEnvio = document.getElementById('portes-envio').innerText;
  const total = document.getElementById('total').innerText;

  const corpoEmail = `Olá ${name}, confirmamos o teu pedido no site SteelBottles!
    Produto: ${productName}
    Cor: ${productColor}
    Quantidade: ${quantity}
    Subtotal: ${subtotal}
    Desconto: ${desconto}
    Portes de Envio: ${portesEnvio}
    Método de Pagamento: ${paymentMethodText}
    Total: ${total}
  `;

  // Codificar o corpo para garantir que caracteres especiais sejam tratados corretamente
  const corpoCodificado = encodeURIComponent(corpoEmail);

  const link = `mailto:${email}?subject=Detalhes do Pedido SteelBottles&body=${corpoCodificado}`;

  // Abre o cliente de e-mail padrão do usuário
  window.location.href = link;
}

function validateEmail(email) {
  // Add a simple email validation logic
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.getElementById('quantity').addEventListener('input', calculatePrices);
document.querySelector('.discount-input').addEventListener('input', handleDiscountInput);
document.addEventListener('DOMContentLoaded', calculatePrices);