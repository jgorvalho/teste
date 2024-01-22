function enviarPagamento(event) {
    event.preventDefault(); 
  
   
    const name = document.getElementById('name').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
  
    if (!name || !cardNumber || !expiryDate || !cvv) {
      alert('Por favor, preencha todas as informações de pagamento.');
      return;
    }
  
  
    const precoTotal = parseFloat(document.getElementById('precoTotal').innerText);
    const mensagem = `Compra realizada com sucesso!\nTotal: R$ ${precoTotal.toFixed(2)}\n\nDetalhes do Pagamento:\nNome no Cartão: ${name}\nNúmero do Cartão: ${cardNumber}\nData de Expiração: ${expiryDate}\nCVV: ${cvv}`;
  
    alert(mensagem);
  
    
    document.getElementById('paymentForm').reset();
  }
  