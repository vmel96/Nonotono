const menu = document.querySelector('.menu');
const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})

/*Slider js*/

let slideIndex = 1;
showSlide(slideIndex);

function autoChangeSlide() {
    changeSlide(1);
    setTimeout(autoChangeSlide, 4000);
}
autoChangeSlide();

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.querySelectorAll('.slide');
    if (n > slides.length) {
    slideIndex = 1;
    }
    if (n < 1) {
    slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}


/*------------*/


