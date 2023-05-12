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
  item.addEventListener("mousemove", () => {
    produtosShow(index);
  });
});
