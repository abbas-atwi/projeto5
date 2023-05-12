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
produtos.forEach((item, index) => {
  item.addEventListener("click", () => {
    produtosShow(index);
  });
});

// pointers
const arraySlide = [0, 100, 200];
const pointers = document.querySelectorAll(".pointer");

function activePointer(index) {
  pointers.forEach((item) => {
    item.classList.remove("active");
  });
  pointers[index].classList.add("active");
  const slide = document.querySelector(".sliders");
  const mg = "vw";
  const sliders = arraySlide[index] === 0 ? 0 : "-";
  console.log((slide.style.marginLeft = `${sliders}${arraySlide[index]}${mg}`));
}
pointers.forEach((item, index) => {
  item.addEventListener("click", () => {
    activePointer(index);
  });
});
