import Movie from "./Movie.js";

const API_URL = "http://localhost:3000/movies";

export async function fetchMovies() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();

    return data.map(
      (movie) =>
        new Movie(
          movie.id,
          movie.title,
          movie.price,
          movie.rating,
          movie.universe
        )
    );

  } catch (error) {
    console.warn("API not available, using fallback data", error);

    return [
      new Movie(1, "Fast and Furious 6", 130),
      new Movie(2, "The Mummy Returns", 95),
      new Movie(3, "Jumanji: Welcome to the Jungle", 110),
      new Movie(4, "Rampage", 100),
      new Movie(5, "Black Widow", 140),
      new Movie(6, "The Dark Knight", 160, 9.0, "DC"),
      new Movie(7, "The Dark Knight Rises", 150, 8.4, "DC"),
      new Movie(8, "Joker", 135, 8.3, "DC"),
      new Movie(9, "Batman Begins", 125, 8.2, "DC"),
      new Movie(10, "Avengers: Infinity War", 165, 8.4, "Marvel"),
      new Movie(11, "Avengers: Endgame", 170, 8.4, "Marvel"),
      new Movie(12, "Spider-Man: No Way Home", 160, 8.2, "Marvel"),
      new Movie(13, "Guardians of the Galaxy", 130, 8.0, "Marvel"),
];
  }
}