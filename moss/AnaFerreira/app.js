document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.getElementsByClassName("sliderproduto");
    let counter = 0;

    // Initially hide all slides and show the first one
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[counter].style.display = "block";

    nextBtn.addEventListener('click', function () {
        slides[counter].style.display = "none";
        counter++;
        if (counter === slides.length) {
            counter = 0;
        }
        slides[counter].style.display = "block";
    });

    prevBtn.addEventListener('click', function () {
        slides[counter].style.display = "none";
        counter--;
        if (counter < 0) {
            counter = slides.length - 1;
        }
        slides[counter].style.display = "block";
    });
});