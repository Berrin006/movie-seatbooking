import Movie from "./Movie.js";

const API_URL = "http://localhost:3000/movies";

export async function fetchMovies() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data.movies.map((movie) => new Movie(movie.id, movie.title, movie.price));  } catch (error) {
    console.warn("API not available, using fallback data", error);

    return [
      new Movie(1, "Fast and Furious 6", 150),
      new Movie(2, "The Mummy Returns", 100),
      new Movie(3, "Jumanji: Welcome to the Jungle", 110),
      new Movie(4, "Rampage", 115),
      new Movie(5, "Black Widow", 120),
    ];
  }
}
