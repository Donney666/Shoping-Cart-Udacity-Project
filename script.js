  
  const products = [
    {
        name: 'cherry',
        price: 4,
        productId: 101,
        image: 'images/cherry.jpg'
     
    },
    {
        name: 'orange',
        price: 15,
        quantity: 0,
        productId: 102,
        image: 'images/orange.jpg'
  
    },
    {
        name: 'strawberry',
        price: 20,
        quantity: 0,
        productId: 103,
        image: 'images/strawberry.jpg'   
    }
  ];
  
  /* Declare an empty array named cart to hold the items in the cart */
  let cart = [];
  
  // Helper function to find a product in the cart by productId
  function findProductInCart(productId) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].productId === productId) {
        return cart[i];
      }
    }
    return null; // Return null if product is not found
  }
  
  // Function to add a product to the cart
  function addProductToCart(productId) {
    // Find the product in the products array
    let product = products.find(p => p.productId === productId);
  
    let productInCart = findProductInCart(productId);
  
    if (productInCart) {
      productInCart.quantity++; // Increase quantity if already in cart
    } else {
      product.quantity = 1; // Set quantity to 1 when adding to cart
      cart.push(product); // Add the product object to the cart
    }
  }
  
  /* Function to increase the quantity of a product in the cart */
  function increaseQuantity(productId) {
    let productInCart = findProductInCart(productId);
  
    if (productInCart) {
      productInCart.quantity++; // Increase quantity if found in cart
    }
  }
  
  /* Function to decrease the quantity of a product in the cart */
  function decreaseQuantity(productId){
    let productInCart = findProductInCart(productId);
  
    if (productInCart) {
      productInCart.quantity--; // Decrease quantity if found in cart
      if (productInCart.quantity === 0) {
        const productIndex = cart.indexOf(productInCart);
        cart.splice(productIndex, 1);
      } 
    }
  }
  
  /* Function to remove a product from the cart */
  function removeProductFromCart(productId) {
    let productInCart = findProductInCart(productId);
  
    if (productInCart) {
      productInCart.quantity = 0; // Set the quantity to 0
      const productIndex = cart.indexOf(productInCart);
      cart.splice(productIndex, 1);
    }
  }
  
  /* Function to calculate the total cost of the cart */
  function cartTotal() {
    let cartCostTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      cartCostTotal += cart[i].quantity * cart[i].price;
    }
    return parseFloat(cartCostTotal.toFixed(2));
  }
  
  /* Function to empty the cart */
  function emptyCart() {
    cart.length = 0;
    // Reset all product quantities in the products array
    products.forEach(product => product.quantity = 0);
  }
  
  /* Function to handle payment */
  let totalPaid=0;
  function pay(amount) {
    totalPaid += amount;
    const remaining = totalPaid - cartTotal();
    if (remaining>=0){
     emptyCart();
     totalPaid = 0;
    }
   return remaining;
  }
  
  /* Export functions for testing purposes */
  module.exports = {
    products,
    cart,
    addProductToCart,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart,
    cartTotal,
    pay,
    emptyCart
  }