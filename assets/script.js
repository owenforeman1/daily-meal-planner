console.log("javascript load");
var mapQuestApiKey = "pz5UbtNqHGRFZY8OHcGGAeZmK7sxjab5";
var cityString = "Atlanta";
var buttonLocation = document.getElementById("placeSearch")
// sort = drop down
// enter city/zip then enter what you are looking for ie grocery store
// then gives closest locations 

function getMapApi() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl = "https://api.github.com/users/octocat/repos";
  cityString = document.getElementById("enterLocation").value;
  console.log({cityString});
  fetch(
    "https://www.mapquestapi.com/search/v4/place?q=" + cityString + "&key= "+ mapQuestApiKey + "&sort=relevance"
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

buttonLocation.addEventListener("click", getMapApi);
