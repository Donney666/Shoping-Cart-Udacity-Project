/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

const product1 ={
  name: 'cherry',
  price: 4,
  quantity: 0,
  productId: 101,
  image:'/Users/liliu/Desktop/ShoppingCart/starter/src/images/cherry.jpg'
};
const product2 ={
  name: 'orange',
  price: 15,
  quantity: 0,
  productId: 102,
  image:'/Users/liliu/Desktop/ShoppingCart/starter/src/images/orange.jpg'
};
const product3 ={
  name: 'strawberry',
  price: 20,
  quantity: 0,
  productId: 103,
  image:'/Users/liliu/Desktop/ShoppingCart/starter/src/images/strawberry.jpg'
};

const products=[product1, product2, product3];

/* Declare an empty array named cart to hold the items in the cart */

let cart=[];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
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
  let product = null;

  // Find the product in the products array
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      product = products[i];
      break;
    }
  }

  // If product is not found, log an error message
  if (!product) {
    console.log("Product not found.");
    return;
  }

  let productInCart = findProductInCart(productId);

  if (productInCart) {
    productInCart.quantity++; // Increase quantity if already in cart
  } else {
    // Create a new object to avoid modifying the original product object
    let newProduct = { ...product, quantity: 1 };
    cart.push(newProduct); // Add the new product object to the cart
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

// Function to increase the quantity of a product in the cart
function increaseQuantity(productId) {
  let productInCart = findProductInCart(productId);

  if (productInCart) {
    productInCart.quantity++; // Increase quantity if found in cart
  } else {
    console.log('Product not found in cart.'); // Log message if not found
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

// Function to decrease the quantity of a product in the cart
function decreaseQuantity(productId) {
  let productInCart = findProductInCart(productId);

  if (productInCart) {
    productInCart.quantity--; // Decrease quantity if found in cart
    if (productInCart.quantity === 0) {
      const productIndex = cart.indexOf(productInCart);
      cart.splice(productIndex, 1);
      console.log(productInCart.name + ' has been removed from the cart.'); // Remove from cart when quantity is 0
    } else {
      console.log(productInCart.name + "'s quantity decreased to " + productInCart.quantity + ".");
    }
  } else {
    console.log('Product not found in the cart.');
  }
}


/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart (productId){
  let productInCart = findProductInCart(productId);

  if (productInCart) {
      productInCart.quantity = 0;
      const productIndex = cart.indexOf(productInCart);
      cart.splice(productIndex, 1);
      console.log(productInCart.name + ' has been removed from the cart.'); // Remove from cart when quantity is 0
  }else {
    console.log('Product not found in the cart.');
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal(){
  let cartCostTotal=0;
  for (let i = 0; i < cart.length; i++  ){
    cartCostTotal+=cart[i].quantity*cart[i].price;
  }
  return parseFloat(cartCostTotal.toFixed(2));
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart(){
   cart.length = 0;
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

let remainingBalance = 0;
function pay(amount) {
  let totalCost = cartTotal();
  let balance = amount - totalCost;
  remainingBalance = balance; // Update global remaining balance
  return parseFloat(balance.toFixed(2));
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
