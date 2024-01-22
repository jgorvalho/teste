let productCount = 1;

function duplicateProduct(productId) {
    // Cria um clone do produto original
    const originalProduct = document.getElementById(`product${productId}`);
    const clone = originalProduct.cloneNode(true);

    // Incrementa o contador e atualiza os IDs
    productCount++;
    const newProductId = `product${productCount}`;
    const newPriceId = `price${productCount}`;

    clone.id = newProductId;
    clone.querySelector('.price').id = newPriceId;

    // Adiciona o produto clonado à página
    originalProduct.parentNode.appendChild(clone);

    // Atualiza o preço do produto clonado
    updatePrice(newPriceId);
}

function updatePrice(priceId) {
    // Lógica para ajustar o preço, por exemplo, duplicar o valor atual
    const currentPrice = parseFloat(document.getElementById(priceId).innerText.replace('R$ ', ''));
    const newPrice = currentPrice * 2;

    // Atualiza o preço na página
    document.getElementById(priceId).innerText = `R$ ${newPrice.toFixed(2)}`;
}
