/* nav"responsive" class para a nav */
function myFunction() {
  var x = document.getElementById("menu-icon");
  if (x.className === "navbar") {
    x.className += "responsive";
  } else {
    x.className = "navbar";
  }
} 

//biblioteca swiper js
const swiper = new Swiper('.slider-wrapper', {
  slidesPerView: 50, // Espaço entre os slides
  direction: 'vertical',
  loop: true,
  grabCursor: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//responssive breackpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    }
    620: {
      slidesPerView: 2
    }
    1024: {
      slidesPerView: 3
    }
  
});


// Details button functionality
document.querySelectorAll('.details-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
      const slideCaption = slides[index].querySelector('.slide-caption').textContent;
      alert(`Detalhes do imóvel: ${slideCaption}`);
    });
  });


