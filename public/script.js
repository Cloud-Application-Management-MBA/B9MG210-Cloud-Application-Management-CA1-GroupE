// Open product
function openProduct(id){
  window.location.href = "product.html?id=" + id;
}


// ================= ADD TO CART (DB) =================
function addToCart(id){
  fetch('/api/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      productId: id,
      quantity: 1
    })
  })
  .then(() => {
    alert("Added to cart!!");
    updateCartCount();
  });
}


// ================= CART COUNT =================
function updateCartCount(){
  fetch('/api/cart')
    .then(res => res.json())
    .then(data => {
      let el = document.getElementById("cart-count");
      if(el) el.innerText = data.length;
    });
}


// ================= LOAD EVENT =================
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
});


// ================= CHECKOUT =================
document.addEventListener("click", function(e){
  if(e.target.classList.contains("checkout")){
    fetch('/api/checkout', { method: 'POST' })
      .then(() => {
        alert("Payment Successful!");
        window.location.href = "index.html";
      });
  }
});