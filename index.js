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
  var size = cart.length;
  var cartMessage = 'In your cart, you have';
  var itemPrice = [];
  var twoItems = itemPrice.join(' and')     ;          
  var moreItems = itemPrice.slice(0, itemPrice.length -1).join(' ,');
  var lastItem = itemPrice[itemPrice.length-1];

  if (size === 0) {
    console.log("Your shopping cart is empty.");
  }

  else {
    for (var i=0; i < size; i++) {
      var cart0 = cart[i];
      var item = Object.keys(cart0)[i];          
      var price = cart0[item];          

      itemPrice.push(` ${item} at ${price}`);        

      if (size === 1) {                              
        console.log(`${cartMessage} ${itemPrice}.`);
      }
      if (size === 2) {                               
        console.log(`${cartMessage} ${twoItems}.`);
      }
      if (size >= 3) {                                
        console.log(`${cartMessage} ${moreItems} and${lastItem}.`);
      }
    }
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
  var present = false;
  if (cart.length > 0){
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item) === true){
      cart.splice(i, 1);
      console.log(cart);
      present = true}}}
  if (present === false){console.log('That item is not in your cart.')}
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("Sorry, we don't have a credit card on file for you.")   }
   else {console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)}
    cart = [];
}
