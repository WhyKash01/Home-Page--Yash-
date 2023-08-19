const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  slides[slideIndex].style.display = 'block';
  currentSlide = slideIndex;
}
// function showSlide(slideIndex) {
//     if (slideIndex < 0) {
//       slideIndex = slides.length - 1;
//     } else if (slideIndex >= slides.length) {
//       slideIndex = 0;
//     }
  
//     slides.forEach((slide, index) => {
//       if (index === slideIndex) {
//         slide.style.transform = 'translateX(0)';
//       } else if (index < slideIndex) {
//         slide.style.transform = 'translateX(-100%)';
//       } else {
//         slide.style.transform = 'translateX(100%)';
//       }
//     });
  
//     currentSlide = slideIndex;
//   }
function nextSlide() {
  showSlide(currentSlide + 1);
}
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

function prevSlide() {
  showSlide(currentSlide - 1);
}

showSlide(currentSlide);

// Auto slide every 3 seconds
setInterval(nextSlide, 4500);
