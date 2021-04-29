// Slider
var myCarousel = document.querySelector('#mainSlider')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000,
});

// Pokaż zawartośc koszyka
const basketButton = document.getElementById("basketButton");
const miniBasket = document.getElementById("miniBasket");

const showMiniBasket = () => {
  miniBasket.classList.add("mini-basket__list--show");
}

const hideMiniBasket = () => {
  miniBasket.classList.remove("mini-basket__list--show");
}

basketButton.addEventListener("mouseover", showMiniBasket);
miniBasket.addEventListener("mouseover", showMiniBasket);

basketButton.addEventListener("mouseleave", hideMiniBasket);
miniBasket.addEventListener("mouseleave", hideMiniBasket);


// Obsługa header przy scrollowaniu
const topBar = document.getElementById("header");
const veritcalMenu = document.getElementById("veritcalMenu");
const productBtn = document.getElementById("horizontalMenu__product-btn");

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
// const currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     topBar.style.top = "0";
//   } else {
//     topBar.style.top = "-40px";
//   }
//   prevScrollpos = currentScrollPos;

  // const scroll = window.scrollY;
  // if(scroll === 0){
  //   veritcalMenu.style.display = "block";
  // } else {
  //   veritcalMenu.style.display = "none";
  // }

// Ukrywanie btn "Produkty" jeżeli scroll jest 0
  if(scroll === 0){
    productBtn.style.display = "none";
  } else {
    productBtn.style.display = "block";
  }
}



