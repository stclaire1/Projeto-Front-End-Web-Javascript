window.addEventListener("load", () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTJjOTg5MGU5M2YwZmRhYTg5ODQ3OTA5NGI3MGJmMyIsInN1YiI6IjY2MDMwZTIwNDU5YWQ2MDE4N2ZjNWJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWhXCNN1sVEQH4xijfXs4GjiYOScAR8_kpTt--p5gME'
        }
      };
      
      var language = "pt-br";

      fetch(`https://api.themoviedb.org/3/movie/popular?language=${language}&page=1`, options)
        .then(response => response.json())
        .then(movies => {
          const top10Movies = movies.results.slice(0, 10);
          displayTitles(top10Movies);
        })
        .catch(err => console.error(err));

})

function displayTitles(movies) {
    movies.forEach(movie => {
        var movieContainer = document.createElement("div");
        movieContainer.classList.add("movieInfo");

        var infoDiv = document.createElement("div");
        infoDiv.classList.add("infoDiv");

        var groupInfoDiv = document.createElement("div");
        groupInfoDiv.classList.add("groupInfoDiv");

        var titleGroupDiv = document.createElement("div");
        titleGroupDiv.classList.add("titleGroupDiv");

        var rating = document.createElement("div");
        rating.classList.add("rating");

        // Criando o parágrafo
        var movieTitle = document.createElement("p");
        movieTitle.textContent = movie.title;

        // Criando a imagem 
        var moviePoster = document.createElement("img");
        var url = "https://image.tmdb.org/t/p/w500";
        moviePoster.setAttribute("src",`${url}${movie.poster_path}`);

        //Criando o ano de lançamento
        var movieReleaseYear = document.createElement("p");
        movieReleaseYear.textContent = movie.release_date.substring(0, 4);

        titleGroupDiv.appendChild(movieTitle);
        groupInfoDiv.appendChild(movieReleaseYear);
        
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTJjOTg5MGU5M2YwZmRhYTg5ODQ3OTA5NGI3MGJmMyIsInN1YiI6IjY2MDMwZTIwNDU5YWQ2MDE4N2ZjNWJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWhXCNN1sVEQH4xijfXs4GjiYOScAR8_kpTt--p5gME'
            }
          };
          
          var language = "pt-br";

        //Criando a duração, avaliação e sinopse
        fetch(`https://api.themoviedb.org/3/movie/${movie.id}?language=${language}`, options)
            .then(response => response.json())
            .then(movieDetails => {
                var movieRunTime = document.createElement("p");
                movieRunTime.textContent = movieDetails.runtime + " minutos";

                var movieOverview = document.createElement("p");
                movieOverview.textContent = movieDetails.overview.substring(0, 250) + "...";

                var movieRating = document.createElement("p");
                movieRating.innerHTML =  movie.vote_average.toFixed(1);

                var starIcon = document.createElement("span");
                starIcon.classList.add("fa", "fa-star");

                groupInfoDiv.appendChild(movieRunTime);
                rating.appendChild(starIcon);
                rating.appendChild(movieRating);
                groupInfoDiv.appendChild(rating);
                titleGroupDiv.appendChild(groupInfoDiv)
                infoDiv.appendChild(titleGroupDiv);
                infoDiv.appendChild(movieOverview);

                movieContainer.addEventListener("mouseover", () => {
                  movieOverview.textContent = movieDetails.overview;
              });

              movieContainer.addEventListener("mouseout", () => {
                  movieOverview.textContent = movieDetails.overview.substring(0, 200) + "...";
              });
          });
        
        movieContainer.appendChild(moviePoster);
        movieContainer.appendChild(infoDiv);

        document.getElementById("boxMovie").appendChild(movieContainer);
    })
}

