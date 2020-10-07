//create image div
const creatMovieContainer = (movies) => {
  const movieElement = document.createElement("div");
  movieElement.setAttribute("class", "movie");
  movies.forEach((movie) => {
    const img = document.createElement("img");
    img.src = `${imageUrl}${movie.poster_path}`;
    movieElement.appendChild(img);
  });
  return movieElement;
};

//fetch code
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchVal = search.value;
  fetch(
    `${url}/3/${path}?api_key=${api_key}&query=${searchVal}`
  )
    .then((res) => res.json())
    .then((data) => {
      const movies = data.results;
      const movieBlock = creatMovieContainer(movies);
      gifAreaDiv.textContent = "";
      gifAreaDiv.appendChild(movieBlock);
    })
      .catch((err) => {
                const errDiv = document.createElement("span");
                errDiv.textContent = "something went wrong please try agin later";
                gifAreaDiv.textContent = "";
                gifAreaDiv.appendChild(errDiv);
              });
  
});

