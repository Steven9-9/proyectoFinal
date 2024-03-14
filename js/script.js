const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {

  slides.forEach((slide) => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
  currentSlide = (currentSlide + 1) % slides.length;
  
}

setInterval(showSlide, 3000);

function toggleMenu() {

    var menu = document.getElementById('menuLateral');
    if (menu.style.width === '0px' || menu.style.width === '') {
      menu.style.width = '350px';
    } else {
      menu.style.width = '0';
    }
  }
  
  const popup = document.getElementById('popup');
const close = document.getElementById('close');

window.addEventListener('load', function() {
  setTimeout(function() {
    popup.style.display = 'block';
  }, 2000);
});

close.addEventListener('click', function() {
  popup.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});