



































recipeArray = data.hits;




body = document.body;
var cardEL = document.createElement("div");
cardEL.setAttribute("class", "card");
var cardHeadEl = document.createElement("div");
cardHeadEl.setAttribute("class", "card-header");
var cardContentEl = document.createElement("div");
cardContentEl.setAttribute("class", "card-content");
var p1 = document.createElement("p");
var p2 = document.createElement("p");

body.appendChild(cardEL);
cardEL.appendChild(cardHeadEl);
cardHeadEl.appendChild(cardContentEl);
p1.append