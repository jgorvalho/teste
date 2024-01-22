    const slides = [
      { name: 'Garrafa "Prestige"', price: '8€', description: 'A Garrafa "Prestige" é a escolha perfeita para quem busca simplicidade aliada a materiais de alta qualidade. O design padrão oferece praticidade e elegância, garantindo uma experiência duradoura', image: 'fotos-produto/1.jpg', topics: '&#x2022 Design Básico <br> &#x2022 Preço Padrão', choices: ['orange', 'blue', 'red', 'yellow'] },
      { name: 'Garrafa "n2"', price: '3€', description: 'A "n2" é a opção mais econômica, ideal para quem procura uma garrafa simples e acessível. Com materiais considerados mais em conta, oferece uma solução prática para o dia a dia. ', image: 'fotos-produto/2.jpg', topics: '&#x2022 Preço acessível', choices: ['green', 'red', 'blue'] },
      { name: 'Garrafa "Waterdrop"', price: '15€', description: 'A Garrafa Waterdrop destaca-se pela sofisticação e qualidade premium dos seus materiais. O design minimalista torna a Waterdrop uma escolha elegante, porém com um preço mais elevado. ', image: 'fotos-produto/3.jpg', topics: '&#x2022 Design Minimalista <br> &#x2022 Melhor qualidade dos materiais', choices: ['black'] },
      { name: 'Garrafa "Mira"', price: '10€', description: 'A Garrafa "Mira" oferece uma variedade de opções de cores vibrantes e um design colorido, combinado com materiais de qualidade. O preço intermediário e fácil limpeza tornam a Mira a escolha perfeita para quem busca estilo e praticidade.', image: 'fotos-produto/4.jpg', topics: '&#x2022 Design personalizável <br> &#x2022 Limpeza Fácil', choices: ['purple', 'cyan', 'black', 'pink', 'blue'] },
      { name: 'Garrafa "ThermoFlask"', price: '12€', description: 'A ThermoFlask é a companheira ideal para os aventureiros, oferecendo resistência incomparável a diferentes temperaturas. A sua portabilidade torna-a essencial para quem está sempre em movimento. ', image: 'fotos-produto/5.jpg', topics: '&#x2022 Resistência a maiores diferenças de temperatura <br> &#x2022 Boa portabilidade', choices: ['red', 'gray', 'black', 'blue'] }
    ]; //introducao dos produtos à venda

    let selectedColorOnFirstPage = 'white'; 


    let currentSlide = 0;
    let currentColor = ''; 

    function updateSlide() {
      const slide = slides[currentSlide];
      document.getElementById('nome').innerText = slide.name;
      document.getElementById('preço').innerText = slide.price;
      document.getElementById('descricao').innerText = slide.description;
      document.getElementById('topicos').innerHTML = slide.topics;
      document.getElementById('slideImage').src = slide.image;
      document.getElementById('slideNumber').innerText = `${currentSlide + 1}/${slides.length}`; //reúne todas as informações para que possam ser alteradas a cada slide

      const escolhasDiv = document.querySelector('.escolhas');
      escolhasDiv.innerHTML = '';

      slide.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = `colorButton ${choice}`;
        button.onclick = () => changeColor(choice);
        escolhasDiv.appendChild(button); 
      });

      updateColorButtons();
      updateFinalColor();
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      currentColor = '';
      updateSlide();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      currentColor = '';
      updateSlide();
    }

    function updateColorButtons() {
      const colorButtons = document.querySelectorAll('.colorButton');
      colorButtons.forEach(button => {
        const color = button.classList[1];
        button.style.outline = color === selectedColorOnFirstPage ? '7px solid black' : '2px solid black';
      });
    }

    function redirectToComprarPage() {
      if (selectedColorOnFirstPage && selectedColorOnFirstPage !== 'white') {
        const productData = slides[currentSlide];
        const comprarPageUrl = `compra.html?name=${encodeURIComponent(productData.name)}&price=${encodeURIComponent(productData.price)}&color=${encodeURIComponent(selectedColorOnFirstPage)}&image=${encodeURIComponent(productData.image)}`;
        window.location.href = comprarPageUrl;
      } else {
        alert('Por favor, escolhe uma cor para continuar');
      }
    }

    function updateFinalColor() {
      const corFinalButton = document.querySelector('.cor-final');
      corFinalButton.style.backgroundColor = selectedColorOnFirstPage;
    }

    function changeColor(color) {
      selectedColorOnFirstPage = color;
      updateColorButtons();
      updateFinalColor();
    } //altera a cor selecionada


    updateSlide();