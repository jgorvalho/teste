const slides = [
      { name: 'JBL T520 (Preto)', price: '59.99€', description: 'Baixos profundos, sem cabos. Os auscultadores JBL Tune 520 com a mais recente tecnologia 5.3 BT, e o poderoso JBL Pure Bass fornecem até 57H de puro prazer musical + 3H extra com apenas 5 minutos de carga rápida. Fáceis de usar e com a App JBL MyHeadphones personalize a EQ enquanto os comandos de voz o guiam pelos vários recursos. Pode gerir chamadas, som e volume do auscultador, graças aos controles na cápsula. Se receber uma chamada enquanto assiste a um vídeo noutro dispositivo, os JBL Tune 520 mudam para o seu smartphone, para que nunca perca uma chamada. Leve e confortáveis mesmo depois de longas horas de audição, pode continuar a ouvir os auscultadores JBL Tune 520 em movimento, portáteis, dobram-se na sua mochila para o acompanhar onde quer que vá!', image: 'produtos/imagem1.png' },
      { name: 'JBL Tune 760NC (Preto)', price: '129.99€', description: 'Baixos poderosos, todo o dia! Os auscultadores JBL Tune 760NC com a mais recente tecnologia 5.3 BT, e o poderoso JBL Pure Bass fornecem até 76H de puro prazer musical + 3H extra com apenas 5 minutos de carga rápida. Fáceis de usar e com a App JBL MyHeadphones personalize a EQ enquanto os comandos de voz o guiam pelos vários recursos. Pode gerir chamadas, som e volume do auscultador, graças aos controles na cápsula. Se receber uma chamada enquanto assiste a um vídeo noutro dispositivo, os JBL Tune 760NC mudam para o seu smartphone, para que nunca perca uma chamada. Leve e confortáveis mesmo depois de longas horas de audição, pode continuar a ouvir os auscultadores JBL Tune 760NC em movimento, portáteis, dobram-se na sua mochila para o acompanhar onde quer que vá!', image: 'produtos/imagem2.png' },
      { name: 'JBL Tour One M2 (Preto)', price: '329.99€', description: 'Construídos para elevado conforto, desenhados para inspiração. Com tecnologia Noise Canceling True Adaptive, os JBL Tour One M2 eliminam todas as distrações para que possa desfrutar das suas playlist favoritas - ou até mesmo do silêncio. São alimentados pelo lendário som JBL Pro com certificação HiRes. Fáceis de usar e com a App JBL MyHeadphones personalize a EQ enquanto os comandos de voz o guiam pelos vários recursos. Mergulhe numa experiência imerssiva de áudio espacial que o vai surpreender, aproveite conversas com melhor qualidade graças à tecnologia de 4 microfones integrados que reconhecem sua voz. Personalize a experiência na App.', image: 'produtos/imagem3.jpg' }
    ];

    let currentSlide = 0;

    function updateSlide() {
      const slide = slides[currentSlide];
      document.getElementById('nome').innerText = slide.name;
      document.getElementById('preço').innerText = slide.price;
      document.getElementById('descricao').innerText = slide.description;
      document.getElementById('slideImage').src = slide.image;

      // Save the current product information to sessionStorage
      sessionStorage.setItem('currentProduct', JSON.stringify(slide));
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlide();
    }


    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlide();
    }

    function goToCart() {
      window.location.href = 'carrinho.html';
    }

    function addToCart() {
      // Retrieve existing cartItems from sessionStorage
      const existingCartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

      // Check if the item is already in the cart
      const existingItem = existingCartItems.find((item) => item.name === slides[currentSlide].name);

      if (existingItem) {
        // If the item is already in the cart, increase the quantity
        existingItem.quantity++;
      } else {
        // If the item is not in the cart, add it with quantity 1
        existingCartItems.push({
          image: slides[currentSlide].image,
          name: slides[currentSlide].name,
          quantity: 1,
          price: slides[currentSlide].price,
        });
      }

      // Save the updated cartItems to sessionStorage
      sessionStorage.setItem('cartItems', JSON.stringify(existingCartItems));

      alert('Adicionado ao carrinho com sucesso. Obrigado :)');
    }

    updateSlide();