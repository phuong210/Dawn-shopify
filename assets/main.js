const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

// const cartIcons = document.querySelector('.cartIcon');
  const cartIcons = $(".cartIcon");
  const cartItemCount = document.getElementById("cart-item-count");


  function updateCartItemCount() {
    fetch("/cart.json").then((response) => response.json()).then((data) => {
      const itemCount = data.item_count;
      cartItemCount.textContent = itemCount;
    }).catch((error) => {
      console.error("Error fetching cart data:", error);
    });
  }

  updateCartItemCount();

  const productItem = $(".js-product__item");
  const addToCartBtn = productItem.querySelector(".add-to-cart-btn");
  addToCartBtn.onclick = function() {
    const radioButtons = productItem.querySelectorAll('input[type="radio"][name="id"]');
    let checkedValue;
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        checkedValue = radioButton.value;
        break;
      }
    }

// console.log(checkedValue);
    const quantity = productItem.querySelector(".quantity").value;
    const formData = new FormData();
    formData.append("id", checkedValue);
    formData.append("quantity", quantity);
    fetch("/cart/add.js", {
      method: "POST",
      body: formData
    }).then(function(response) {
      showSuccessToast();
      updateCartItemCount();
      return response.json();
    }).then(function(json) {
      console.log(json);
    }).catch(function(error) {
      console.error(error);
    });
  };