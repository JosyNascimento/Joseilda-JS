/* nav"responsive" class para a nav */
function myFunction() {
  var x = document.getElementById("menu-icon");
  if (x.className === "navbar") {
    x.className += "responsive";
  } else {
    x.className = "navbar";
  }
} 





const carousel = document.querySelector('.carousel');
const slides = Array.from(carousel.children);

let currentIndex = 0;
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to each other
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
});

function moveToSlide(currentIndex, targetIndex) {
  const currentSlide = slides[currentIndex];
  const targetSlide = slides[targetIndex];
  carousel.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('active');
  targetSlide.classList.add('active');
  return targetIndex;
}

// Next button functionality
document.getElementById('nextBtn').addEventListener('click', () => {
  const currentSlide = slides[currentIndex];
  let nextIndex = currentIndex + 1;
  if (nextIndex >= slides.length) {
    nextIndex = 0;
  }
  currentIndex = moveToSlide(currentIndex, nextIndex);
});

// Previous button functionality
document.getElementById('prevBtn').addEventListener('click', () => {
  const currentSlide = slides[currentIndex];
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    prevIndex = slides.length - 1;
  }
  currentIndex = moveToSlide(currentIndex, prevIndex);
});


// Details button functionality
document.querySelectorAll('.details-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
      const slideCaption = slides[index].querySelector('.slide-caption').textContent;
      alert(`Detalhes do imóvel: ${slideCaption}`);
    });
  });


