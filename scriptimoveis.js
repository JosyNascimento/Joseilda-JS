/* nav"responsive" class para a nav */
function myFunction() {
  var x = document.getElementById("menu-icon");
  if (x.className === "navbar") {
    x.className += "responsive";
  } else {
    x.className = "navbar";
  }
}

// Biblioteca Swiper JS
const swiper = new Swiper('.swiper', {
  slidesPerView: 4, // Número de slides visíveis
  spaceBetween: 10, // Espaço entre os slides
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// Funcionalidade do botão Detalhes
document.querySelectorAll('.detalhes').forEach((button, index) => {
  button.addEventListener('click', () => {
    const slideCaption = document.querySelectorAll('.swiper-slide')[index].querySelector('h4').textContent;
    alert(`Detalhes do imóvel: ${slideCaption}`);
  });
});
