const userLoggedIn = true;

alert("Welcome to Mobile Shopper Application! Open Console to start")

const products = [
  { id: 1, name: 'Plain White', price: 2.99, size: "L", description: "Plain White T-shirt"},
  { id: 2, name:'Relaxed Fit Jeans', price: 45.95, size: "L", description: "Relaxed fit blue jeans"},
  { id: 3, name: "Laptop", price: 899.99, description: "A powerful laptop for all your computing needs."},
  { id: 4, name: "Smartphone", price: 999.99, description: "A high-end smartphone."}
];

let cart = [];

// checking if user is logged in
function loginValidation(userLoggedIn) {
  if (userLoggedIn) {
    return "You are logged in!"

  } else {
    return "Please Login to continue shopping!"
  }
}

console.log(loginValidation(userLoggedIn));

// looping products
function productLoop () {
  for (const keys in products) {
    for (const key in products[keys]) {
      console.log(`${key}: ${products[keys][key]}`)
    }
    console.log(" ")
  }
}

// looping cart
function cartLoop() {
  for (const item in cart) {
    console.log(`${cart[item].name}: $${cart[item].price}`)
  }
}

// adding product to cart
function addToCart(productId) {
  if (userLoggedIn) {
      const product = products.find(p => p.id === productId);
      if (product) {
          cart.push(product);
          console.log(`Added ${product.name} to the cart.`);
      } else {
          console.log("Product not found.");
      }
  } else {
      console.log("Please log in to add items to your cart.");
  }
}

// cart total
function cartTotal() {
  let totalCost = 0;
  cart.forEach(product => {
      totalCost += product.price;
  });
  return totalCost.toFixed(2);
}

// Main program
function main(){
  do {
    let userInput = prompt("Choose Menu Option: [V]iew cart, [P]roduct catalog, or [E]nd")
    let result = userInput.toUpperCase();
    if (result == "P") {
      productLoop();
      let x = parseInt(prompt("Product ID number to add to cart"));
      addToCart(x);
    } else if (result == "V") {
      console.log("Users Cart")
      cartLoop();
      console.log(`Your cart total is $${cartTotal()}`);
    } else if (result == "E") {
      console.log(`Thank you for shopping with us today! Your cart balance is $${cartTotal()}`)
      break
    } else {
      console.log("Invalid Input")
    }
  } while (true);
}

setTimeout(main, 10000);
