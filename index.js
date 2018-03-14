var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var item_object = {};
  item_object[item] = price;
  cart.push(item_object);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    } else {
      var items = [];
      for (var i = 0; i < cart.length; i++) {
        for (var item in cart[i]) {total
          items.push(item + " at $" + cart[i][item])
        }
      }
      console.log("In your cart, you have " + items.join(", ") + ".");
    }
}

function total() {
  var totalprice = 0;
  for (var i = 0; i < cart.length; i++){
    var itemi = Object.keys(cart[i]);
    var pricei = cart[i][itemi];
    totalprice = totalprice + pricei }
  return totalprice;
}

function removeFromCart(item) {
  var present = false
  if (cart.length > 0){
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item) === true){
      cart.splice(i, 1)
      console.log(cart)
      present = true}}}
  if (present === false){console.log('That item is not in your cart.')}
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
