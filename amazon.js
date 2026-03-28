const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 20000,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 4,
    name: "Shoes",
    price: 3000,
    image: "https://via.placeholder.com/200"
  }
];

let cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");

  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(div);
  });
}

function addToCart(id) {
  cart.push(id);
  document.getElementById("cart-count").innerText = cart.length;
}

displayProducts();