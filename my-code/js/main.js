// // ambient store music:
// var audio = new Audio('audio/market.mp3');
// window.onload = function(){
//   document.getElementById('playAudio').play();
// }

// Empty Shopping Cart
var shoppingCart = [];

// Grabbing all the Elements:
var cart = document.getElementById('cart');
    fruit = document.getElementById('fruit'),
    fruitContainer = document.getElementById('fruitContainer'),
    veggies = document.getElementById('veggies'),
    veggieContainer = document.getElementById('veggieContainer'),
    meat = document.getElementById('meat'),
    meatContainer = document.getElementById('meatContainer'),
    images = document.getElementsByTagName('img'),
    ul = document.createElement('ul'),
    newUl = document.getElementsByTagName('ul')[0];

var shoppingItems = [fruit, veggies, meat];


// Show and Hide Category Displays
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
    cart.append(event.currentTarget.id);
  });
  // ul.append(shoppingCart);
  // cart.append(shoppingCart);
  // li.value = shoppingCart.setAttribute(li)
}

// var favoriteWebsite = document.getElementById("favorite-website");
// var link = document.createElement('a');
// var text = document.createTextNode("find out here!");
// var web = prompt("What is your favorite website? (Don't forget to add http://)");



// link.setAttribute('href', web);
// link.appendChild(text);
// favoriteWebsite.appendChild(link);


























