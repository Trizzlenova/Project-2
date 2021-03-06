// // ambient store music:
// var audio = new Audio('audio/market.mp3');


// Grabbing all the Elements:
var cart = document.getElementById('cart');
    fruit = document.getElementById('fruit'),
    fruitContainer = document.getElementById('fruitContainer'),
    veggies = document.getElementById('veggies'),
    veggieContainer = document.getElementById('veggieContainer'),
    meat = document.getElementById('meat'),
    meatContainer = document.getElementById('meatContainer'),
    deleteItems = document.getElementById('deleteItems'),
    images = document.getElementsByTagName('img'),
    ul = document.createElement('ul');



// Show and Hide Category Displays
var shoppingItems = [fruit, veggies, meat];
for(var i = 0; i < shoppingItems.length; i++) {
  shoppingItems[i].addEventListener('mouseenter', function(){
    if(event.currentTarget === meat) {
      meatContainer.style.display = 'block';
      fruitContainer.style.display = 'none';
      veggieContainer.style.display = 'none';
    } else if(event.currentTarget === veggies){
      veggieContainer.style.display = 'block'
      fruitContainer.style.display = 'none';
      meatContainer.style.display = 'none';
    } else {
      fruitContainer.style.display = 'block';
      veggieContainer.style.display = 'none';
      meatContainer.style.display = 'none';
    }
  });
}


// Add item(s) to the shopping cart
for(var j = 0; j < images.length; j++) {
  images[j].addEventListener('click', function(){
    var newLine = document.createElement('p');
    newLine.innerText = event.currentTarget.id;
    cart.append(newLine);
  });
}

// Delete Items
deleteItems.addEventListener('click', function(){
  cart.innerText = "";
});
