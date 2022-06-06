function getMovieInfo(title) {
  const titleFixed = title.replace(/ /g, "+");
  var url = `http://www.omdbapi.com/?t=${title}&apikey=6022c906`;
  fetch(url)
    .then((response) => response.json)
    .then((data) => {
      return data;
    });
}

// export default getMovieInfo;
console.log(getMovieInfo("The Matrix"));
