



































recipeArray = data.hits;

var recipes = data.hits[i];
var thumbnails = data.hits[i].recipe.images.THUMBNAIL;
var label = data.hits[i].recipe.label;
var ingredients = data.hits[i].recipe.ingredientLines[i];

var card = $("<div>").addClass("card");
var header = $("<h3>").addClass("card-header").text(label);
var body = $("<div>").addClass("card-content");
var p1 = $("<p>").addClass("card-content").text();
var p2 = $("<p>").addClass("card-text").text();

var cardEL = document.createElement("div");
cardEL.setAttribute("class", "card-header")