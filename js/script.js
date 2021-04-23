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

// Pokazywanie tooltip 
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
})

// Tabs na karcie produktu
const tabsTriggerList = [...document.querySelectorAll('.tab-link')];

tabsTriggerList.forEach(tab => {
    tab.addEventListener("click", function(tab) {
        tabsTriggerList.forEach(tabOne => tabOne.classList.remove("active"));
    
        this.classList.add("active");
    });
});

// Dodawanie i odejmowanie ilości do zamówienia
const removeOneFromQuantity = document.getElementById("removeOneFromQuantity");
const addOneToQuantity = document.getElementById("addOneToQuantity");
const productQuantity = document.getElementById("productQuantity");

addOneToQuantity.addEventListener("click", () => {
    productQuantity.value = parseInt(productQuantity.value) + 1;
});

removeOneFromQuantity.addEventListener("click", () => {
    const quantity = parseInt(productQuantity.value);
    if(quantity > 1){
        productQuantity.value = parseInt(productQuantity.value) - 1;
    };
});

// Slider produktów na karcie produktów 
const thumbnails = document.querySelectorAll(".product__thumbnail");
const productMainImage = document.getElementById("featured");
let mainImageSrc = "";

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('mouseover', function(){

    thumbnails.forEach(activeImage =>{ 
      if(activeImage.classList.contains('product__thumbnail--active')){
        activeImage.classList.remove('product__thumbnail--active');
      }
    });

    this.classList.add('product__thumbnail--active');
    productMainImage.src = this.src;
  });
});

const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const productMiniImgs = document.getElementById("productMiniImgs");

arrowLeft.addEventListener('click', ()=> {
  productMiniImgs.scrollLeft -= 180;
})

arrowRight.addEventListener('click', ()=> {
  productMiniImgs.scrollLeft += 180;
})
