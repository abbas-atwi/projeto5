const menu = document.querySelectorAll(".menu a");
menu[0].classList.add("active");
function menuActive(e) {
  e.preventDefault();
  menu.forEach((item) => {
    item.classList.remove("active");
  });
  this.classList.add("active");
}
menu.forEach((item) => {
  item.addEventListener("click", menuActive);
});
const produtos = document.querySelectorAll(".produtos-container .produto");
const produtoImg = document.querySelectorAll(".produto img");
produtos;
produtoImg[0].classList.add("active");
function produtosShow(index) {
  produtos.forEach((item) => {
    item.classList.remove("active");
  });
  produtoImg.forEach((item) => {
    item.classList.remove("active");
  });

  console.log(produtos[index].classList.add("active"));
  produtoImg[index].classList.add("active");
}

// console.log(produtos[0].children.classList.add("active"));
// selecionar todos os sliders e adiconar nome ao produto
const arrayTitles = [
  "iphone 6",
  "iphone 7",
  "iphone 8",
  "iphone 9",
  "iphone 10",
  "iphone 11",
  "iphone 12",
  "iphone 13",
  "iphone 14",
];
const h1 = document.createElement("h1");
function addTitle(index) {
  h1.innerText = arrayTitles[index];
  produtos[index].appendChild(h1);
}

produtos.forEach((item, index) => {
  item.addEventListener("click", () => {
    produtosShow(index);
    addTitle(index);
  });
});
addTitle(0);
// pointers
const arraySlide = [0, 100, 200];
const pointers = document.querySelectorAll(".pointer");
const slide = document.querySelector(".sliders");
const slideChildren = slide.querySelectorAll(".slide");
const slideArea = document.querySelectorAll(".slidearea img");
const imgs = [
  "banner-iphone-avif",
  "banner-iphone14.jpeg",
  "banner-iphone1414.png",
];

function slidersActive(index) {
  slideChildren.forEach((item) => {
    item.classList.remove("active");
  });
  slideChildren[index].classList.add("active");
}
function activePointer(index) {
  pointers.forEach((item) => {
    item.classList.remove("active");
  });
  pointers[index].classList.add("active");
  const mg = "vw";
  const sliders = arraySlide[index] === 0 ? "" : "-";
  console.log((slide.style.marginLeft = `${sliders}${arraySlide[index]}${mg}`));
  slidersActive(index);
}
pointers.forEach((item, index) => {
  item.addEventListener("click", () => {
    activePointer(index);
  });
});
