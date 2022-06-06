const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getMovieInfo(title) {
  const titleFixed = title.replace(/ /g, "+");
  var url = `http://www.omdbapi.com/?t=${title}&apikey=6022c906`;
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  if (request.status === 200) {
    return JSON.parse(request.responseText);
  }
  return JSON.parse(request.responseText);
}

console.log(getMovieInfo("The Matrix"));
