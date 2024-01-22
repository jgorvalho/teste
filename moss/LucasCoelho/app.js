let currentSlide = 0;

function right() {
    showSlide(currentSlide - 1);
}

function left() {
    showSlide(currentSlide + 1);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.product_box');
    
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    currentSlide = index;

    slides.forEach((slide, i) => {
        slide.style.display = 'block';
        slide.style.order = (i - index + slides.length) % slides.length;
    });
}

const promotionBtn = document.getElementById('promotion_btn');
promotionBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});
