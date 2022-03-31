console.log("really stupid statement");
var cardRowEl = document.getElementById("cardRow");

var recipes = JSON.parse(localStorage.getItem("recipeArray"));
console.log({ recipes });
for (var i = 0; i < 6; i++) {
  var recipeEl = recipes[i];
  console.log(recipeEl);
  var ingredients = recipes[i].recipe.ingredientLines;
  console.log({ ingredients });
  for (var j = 0; j < ingredients.length; j++) {
    var ingList = ingredients[j];
    console.log({ ingList });
    // }
  }

  // var ingString = JSON.stringify(ingredients);
  var label = recipes[i].recipe.label;
  console.log(label);
  var cardsEL = document.createElement("div");
  console.log(cardsEL);
  var cardHeadEl = document.createElement("div");
  cardsEL.setAttribute("class", "card");
  console.log(cardHeadEl);
  cardHeadEl.setAttribute("class", "card-header");
  var cardContentEl = document.createElement("div");
  cardContentEl.setAttribute("class", "card-content");
  console.log(cardContentEl);
  var p1 = document.createElement("p");
  p1.setAttribute("class", "card-content");
  console.log(p1);
  cardRowEl.appendChild(cardsEL);
  cardsEL.appendChild(cardHeadEl);
  cardHeadEl.textContent = label;
  cardHeadEl.appendChild(cardContentEl);
  cardContentEl.appendChild(p1);
  p1.textContent = ingredients;
}
// recipeArray = data.hits;

// body = document.body;
// var cardEL = document.createElement("div");
// cardEL.setAttribute("class", "card");
// var cardHeadEl = document.createElement("div");
// cardHeadEl.setAttribute("class", "card-header");
// var cardContentEl = document.createElement("div");
// cardContentEl.setAttribute("class", "card-content");
// var p1 = document.createElement("p");
// var p2 = document.createElement("p");

// body.appendChild(cardEL);
// cardEL.appendChild(cardHeadEl);
// cardHeadEl.appendChild(cardContentEl);
// p1.append
// cardEL.setAttribute("class", "card-header")
