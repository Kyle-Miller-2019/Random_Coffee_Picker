let coffeePicker = Math.floor(Math.random() * 5) + 1;

let coffeeType = "Your coffee is:";

let coffeeFun = document
  .querySelector("button")
  .addEventListener("click", coffee);

function coffee() {
  if (coffeePicker === 1) {
    document.querySelector(
      ".coffee-description"
    ).innerHTML = `${coffeeType} Moachaccino`;
    document.querySelector(".coffeeImg").src =
      "https://joyfoodsunshine.com/wp-content/uploads/2018/07/dairy-free-mocha-latte-recipe-vitamix-aer-6.jpg";
  } else if (coffeePicker === 2) {
    document.querySelector(
      ".coffee-description"
    ).innerHTML = `${coffeeType} Cafe Latte`;
    document.querySelector(".coffeeImg").src =
      "https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg";
  } else if (coffeePicker === 3) {
    document.querySelector(
      ".coffee-description"
    ).innerHTML = `${coffeeType} Frappuccino`;
    document.querySelector(".coffeeImg").src =
      "https://chocolatecoveredkatie.com/wp-content/uploads/2019/07/5-Ingredient-Easy-Homemade-Frappuccino-Recipe.jpg";
  } else if (coffeePicker === 4) {
    document.querySelector(
      ".coffee-description"
    ).innerHTML = `${coffeeType} Cappuccino`;
    document.querySelector(".coffeeImg").src =
      "https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-CAPPUCCINO-BANANA-SESAME-SEEDS.jpg";
  } else {
    document.querySelector(
      ".coffee-description"
    ).innerHTML = `${coffeeType} Irish Coffee`;
    document.querySelector(".coffeeImg").src =
      "https://www.thespruceeats.com/thmb/eNHcrxADmkf0JCgqLcbxmBA9w_0=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/original-irish-coffee-recipe-759311-Hero-5b759d4b46e0fb005089915e.jpg";
  }
}
