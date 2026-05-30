//Carrossel
const slides = document.querySelectorAll('.slide');
const bolinhas = document.querySelectorAll('.bolinha');

let slideAtual = 0;

function mostrarSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove('ativo');
});

bolinhas.forEach((bolinha) => {
    bolinha.classList.remove('ativa');
});

    slides[index].classList.add('ativo');
    bolinhas[index].classList.add('ativa');
}

function proximoSlide() {
    slideAtual++;

    if (slideAtual >= slides.length) {
      slideAtual = 0;
    }

    mostrarSlide(slideAtual);
  }

function voltarSlide() {
    slideAtual--;

    if (slideAtual < 0) {
      slideAtual = slides.length - 1;
    }

    mostrarSlide(slideAtual);
}

setInterval(() => {
    proximoSlide();
}, 5000);

// Filtros 

const botoes = document.querySelectorAll(".filtro");
const cards = document.querySelectorAll(".card-produto");

botoes.forEach(botao => {

  botao.addEventListener("click", () => {

    const filtro = botao.dataset.filtro;

    cards.forEach(card => {

      const info = card.querySelector(".info-produto");

      // mostra todos
      if (filtro === "todos") {
        card.style.display = "block";
      }

      // mostra os que tem a classe
      else if (info.classList.contains(filtro)) {
        card.style.display = "block";
      }

      // esconde o que não tem classe 
      else {
        card.style.display = "none";
      }

    });

  });

});

// barra de pesquisa
const busca = document.querySelector(".busca");


busca.addEventListener("input", () => {

  const texto = busca.value.toLowerCase();

  cards.forEach(card => {

    const nomeProduto = card
      .querySelector("h3")
      .textContent
      .toLowerCase();

    // verifica se o nome tem o texto digitado
    if (nomeProduto.includes(texto)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});

// Filtros de preços

const botoesPreco = document.querySelectorAll(".filtro-preco");

botoesPreco.forEach(botao => {

  botao.addEventListener("click", () => {

    const preco = botao.dataset.preco;

    cards.forEach(card => {

      const info = card.querySelector(".info-produto");

      if (preco === "todos") {
        card.style.display = "block";
      }

      else if (info.classList.contains(preco)) {
        card.style.display = "block";
      }

      else {
        card.style.display = "none";
      }

    });

  });

});
