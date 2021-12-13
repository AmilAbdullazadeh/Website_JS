let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

// forms

let searchBtn = document.querySelector("#search-btn--click");

searchBtn.addEventListener("click", function (e) {
  let searchValue = document.querySelector("#search-box").value;
  let searchStorage = localStorage.getItem("search_data");
  let search_data = {
    search: searchValue,
  };
  localStorage.setItem("search_data", search_data);
});

let cartItem = document.querySelector(".cart-items-container");
let checkoutBtn = document.querySelector("#checkout-btn--click");

checkoutBtn.addEventListener("click", function (e) {
  e.preventDefault;
  let items = [];
  for (let i = 1; i < cartItem.childElementCount; i++) {
    let cartItemName;
    let cartItemQuantity;
    let cartItemNth;
    cartItemNth = document.querySelector(
      `.cart-items-container .cart-item:nth-child(${i})`
    );
    cartItemName = cartItemNth.querySelector(".content h3").innerHTML;
    cartItemQuantity = cartItemNth.querySelector(".content .price").innerHTML;
    items.push({
      productName: cartItemName,
      productQty: cartItemQuantity
    })
  }
  console.log("items", items);
});