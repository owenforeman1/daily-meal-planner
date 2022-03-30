console.log("javascript load");
var mapQuestApiKey = "pz5UbtNqHGRFZY8OHcGGAeZmK7sxjab5";
var cityString = "Atlanta";
var buttonLocation = document.getElementById("placeSearch");
// sort = drop down
// enter city/zip then enter what you are looking for ie grocery store
// then gives closest locations
// pops up when you get food list

function getMapApiInfo() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl = "https://api.github.com/users/octocat/repos";
  cityString = document.getElementById("enterLocation").value;
  console.log({ cityString });
  fetch(
    "https://www.mapquestapi.com/search/v4/place?q=" +
      cityString +
      "&key=" +
      mapQuestApiKey +
      "&sort=relevance"
  )
    .then(function (response) {
      console.log("---------------");
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data.results);
    });
}

function mapdirApi(){
  
} 
//http://www.mapquestapi.com/directions/v2/route?key=KEY&from=Clarendon Blvd,Arlington,VA&to=2400+S+Glebe+Rd,+Arlington,+VA


buttonLocation.addEventListener("click", getMapApiInfo);
