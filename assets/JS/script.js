<<<<<<< HEAD:assets/script.js
=======

>>>>>>> 272686fee840ab2c491b76a61d8f40bcf63f2e5c:assets/JS/script.js
var foodAPIKey = "f1d8bb5060f667390aea5bdedc8729b1";
var foodID = "636d33a1";

body = document.body;
var cardRowEl = document.getElementById("cardRow");

// // say choose a protein dropdown eggs, beans, chicken, bacon, turkey
// var foodpref = document.getElementById("foodPreference").value;

// // populate a box for each meal
// var mealType = document.getElementById("idk").value;
// // var breakfast =
// // var lunch =
// // var dinner =
// var calCount = document.getElementById("calCount").value;

var inputUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=beans&app_id=636d33a1&app_key=f1d8bb5060f667390aea5bdedc8729b1&mealType=Breakfast&calories=0-500`;

console.log(inputUrl);

// var foodpref = userinput"", drop down with food suggestions

// "https://api.edamam.com/api/recipes/v2?type=public&q=" + foodpref + "&app_id" +foodID +"&app_key="+foodAPI+"&mealType=" + mealType + "&calories=" calCount

var fetchResponse = fetch(inputUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    //data only available in this function

    console.log(fetchResponse);

    //mike's work starts here

    //     var card = $("<div>").addClass("card");
    // var header = $("<h3>").addClass("card-header").text(label);
    // var body = $("<div>").addClass("card-content");
    // var p1 = $("<p>").addClass("card-content").text();
    // var p2 = $("<p>").addClass("card-text").text();

    // thumbnails.setAttribute("src", "recipe.images.Thumbnail.url");
    // var thumbs = document.createElement("img");
    // var thumbnails = recipeArray[i].recipe.images.THUMBNAIL;
    // var label = recipeArray[i].recipe.label;

    // var thumbnails = recipeArray[i].recipe.images.THUMBNAIL;

    function getRecipes(recipeArray) {
      // array for recipes
      recipeArray = data.hits;
      for (var i = 0; i < 6; i++) {
        var recipeEl = recipeArray[i];
        console.log(recipeEl);
        var ingredients = recipeArray[i].recipe.ingredientLines;
        console.log({ ingredients });
        for (var j = 0; j < ingredients.length; j++) {
          var ingList = ingredients[j];
          console.log({ ingList });
          // }

         
        }

        // var ingString = JSON.stringify(ingredients);
        var label = recipeArray[i].recipe.label;
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

      // thumbnails.setAttribute("src", "recipe.images.Thumbnail.url");
      // var thumbnails = document.createElement("img");
      // console.log(thumbnails)
      // // var recipes = recipeArray[i];
      // var thumbnails = recipeArray[i].recipe.images.THUMBNAIL;

      // // var recipes = recipeArray[i];
      // // var ingredients = recipeArray[i].recipe.ingredientLines[i];

      
      // cardHeadEl.append(thumbnails)
      // console.log(cardHeadEl)

      // //todo textContent 1st
    }
    getRecipes();
    fetchResponse();

    // var ingredients = data.hits[i].recipe.ingredientLines[i];
    // console.log(ingredients);
  });

let btnSwitch = document.getElementById("displayPage");

function nextPage() {
  window.location.href = "./recipe.html";
}

btnSwitch.addEventListener("click", nextPage);

var dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("is-active");
});
