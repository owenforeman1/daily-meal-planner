

var foodAPIKey = "f1d8bb5060f667390aea5bdedc8729b1";
var foodID = "636d33a1";

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
  });
console.log(fetchResponse);


// recipeArray = data.hits;

// var recipes = data.hits[i];
// var thumbnails = data.hits[i].recipe.images.THUMBNAIL;
// var label = data.hits[i].recipe.label;
// var ingredients = data.hits[i].recipe.ingredientLines[i];

let btnSwitch = document.getElementById("displayPage")

function nextPage() {
  window.location.href="./recipe.html"
}

btnSwitch.addEventListener('click', nextPage)

