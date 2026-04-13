// Open product
function openProduct(id){
  window.location.href = "product.html?id=" + id;
}

// Add to cart
function addToCart(id){
  fetch('/api/product/' + id)
    .then(res => res.json())
    .then(product => {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert("Added to cart");
      updateCartCount();
    });
}

// Cart count
function updateCartCount(){
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let el = document.getElementById("cart-count");
  if(el) el.innerText = cart.length;
}

// LOAD EVENT
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
});

//CHECKOUT BUTTON 
document.addEventListener("click", function(e){
  if(e.target.classList.contains("checkout")){
    alert("Demo Payment Successful ✅");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  }
});