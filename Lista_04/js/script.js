window.addEventListener("load", () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVmMmMwYzJiMjkxZTM3ZTQxYzY1YTZjZTBlYmQ3NCIsInN1YiI6IjY0MTIyNWQ3ZWRlMWIwMjhhMmI4NWVkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VKHFk792x8CFl9Cdx6xDwYP4Ia5Dt5GiJxENktQHGhQ'
        }
      };
      
      var language = "pt-br";

      fetch(`https://api.themoviedb.org/3/movie/popular?language=${language}&page=1`, options)
        .then(response => response.json())
        .then(movies => displayTitles(movies.results))
        .catch(err => console.error(err));

})

function displayTitles(movies) {
    movies.forEach(movie => {
        var boxMovie = document.createElement("div");

        // Criando o parágrafo
        var movieTitle = document.createElement("p");
        movieTitle.textContent = movie.title;

        // Criando a imagem 
        var moviePoster = document.createElement("img");
        var url = "https://image.tmdb.org/t/p/w500";
        // moviePoster.setAttribute("src",`${url}${filme.backdrop_path}`);
        moviePoster.setAttribute("src",`${url}${movie.poster_path}`);

        boxFilme.appendChild(movieTitle);
        boxFilme.appendChild(moviePoster);
        document.getElementById("boxMovie").appendChild(boxMovie);
    })
}