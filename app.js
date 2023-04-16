// Load the movie data from a JSON file
const movies = [
    {
      title: "Movie 1",
      genre: "action",
      rating: 8,
      year: 2022,
      language: "English",
      rank: 1
    },
    {
      title: "Movie 2",
      genre: "comedy",
      rating: 7,
      year: 2021,
      language: "Spanish",
      rank: 2
    },
    {
      title: "Movie 3",
      genre: "drama",
      rating: 9,
      year: 2020,
      language: "French",
      rank: 3
    },
    // Add more movies
  ];
  
  // Get the form and recommendation section elements from the HTML
  const form = document.querySelector("form");
  const recommendationsSection = document.querySelector("#recommendations");
  
  // Add an event listener to the form for when it's submitted
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the user's preferences from the input fields
    const genre = document.querySelector("#genre").value;
    const rating = document.querySelector("#rating").value;
    const year = document.querySelector("#year").value;
    
    // Filter the movies based on the user's preferences
    const filteredMovies = movies.filter(function(movie) {
      if (genre !== "all" && movie.genre !== genre) {
        return false;
      }
      if (rating !== "all" && movie
  