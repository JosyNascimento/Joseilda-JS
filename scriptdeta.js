document.addEventListener("DOMContentLoaded", function() {
    const propertiesList = document.getElementById("propertiesList");
    const imoveis = JSON.parse(localStorage.getItem("imoveis"));
  
    if (imoveis && imoveis.length > 0) {
      imoveis.forEach((imovel, index) => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
  
        const card = `
          <div class="imovel-card">
            <div class="swiper-container card-swiper-container">
              <div class="swiper-wrapper">
                ${imovel.imgs.map(img => `<div class="swiper-slide"><img src="${img}" alt="${imovel.nome}" /></div>`).join('')}
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination card-swiper-pagination"></div>
              <!-- Add Arrows -->
              <div class="swiper-button-next card-swiper-button-next"></div>
              <div class="swiper-button-prev card-swiper-button-prev"></div>
            </div>
            <h2>${imovel.nome}</h2>
            <p>Localização: ${imovel.localizacao}</p>
            <p>${imovel.descricao}</p>
            <ul>
              ${imovel.comodidades.map(comodidade => `<li>${comodidade}</li>`).join('')}
            </ul>
            <button class="detalhes-btn" onclick="verDetalhes(${index})">Detalhes</button>
          </div>
        `;
  
        slide.innerHTML = card;
        propertiesList.appendChild(slide);
      });
  
      // Initialize Swiper for each card swiper
      const cardSwipers = document.querySelectorAll('.card-swiper-container');
      cardSwipers.forEach((cardSwiper) => {
        new Swiper(cardSwiper, {
          loop: true,
          navigation: {
            nextEl: cardSwiper.querySelector('.card-swiper-button-next'),
            prevEl: cardSwiper.querySelector('.card-swiper-button-prev'),
          },
          pagination: {
            el: cardSwiper.querySelector('.card-swiper-pagination'),
            clickable: true,
          },
        });
      });
  
    } else {
      propertiesList.textContent = "Nenhum imóvel encontrado.";
    }
  
    // Initialize main Swiper
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
  
  function verDetalhes(index) {
    localStorage.setItem('imovelIndex', index);
    window.location.href = 'detalhes.html';
  }




  document.addEventListener("DOMContentLoaded", function() {
    const imoveis = JSON.parse(localStorage.getItem("imoveis"));
    const imovelIndex = localStorage.getItem("imovelIndex");
  
    if (imoveis && imovelIndex !== null) {
      const imovel = imoveis[imovelIndex];
  
      document.getElementById("nomeImovel").textContent = imovel.nome;
      document.getElementById("localizacaoImovel").textContent = `Localização: ${imovel.localizacao}`;
      document.getElementById("descricaoImovel").textContent = imovel.descricao;
  
      const swiperFotos = document.getElementById("swiperFotos");
      imovel.imgs.forEach(img => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.innerHTML = `<img src="${img}" alt="${imovel.nome}" />`;
        swiperFotos.appendChild(slide);
      });
  
      const comodidadesImovel = document.getElementById("comodidadesImovel");
      imovel.comodidades.forEach(comodidade => {
        const li = document.createElement("li");
        li.textContent = comodidade;
        comodidadesImovel.appendChild(li);
      });
  
      // Initialize Swiper for the images
      new Swiper('.swiper-container', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
  
    } else {
      document.querySelector(".detalhes-imovel .container").textContent = "Imóvel não encontrado.";
    }
  });