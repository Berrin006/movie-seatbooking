import { fetchMovies } from "./api.js";
import { initSeatBooking } from "./seatBooking.js";

const movieSelect = document.getElementById("movie");

async function loadMovies() {
  const movies = await fetchMovies();

  movieSelect.innerHTML = "";
  const movieGroups = new Map();

  movies.forEach((movie) => {
    const option = document.createElement("option");
    option.value = movie.price;
    option.textContent =
      typeof movie.rating === "number"
        ? `${movie.title} · IMDb ${movie.rating.toFixed(1)} · ${movie.price} kr`
        : `${movie.title} (${movie.price} kr)`;

    let group = movieSelect;

    if (movie.universe) {
      if (!movieGroups.has(movie.universe)) {
        const movieGroup = document.createElement("optgroup");
        movieGroup.label = `${movie.universe} · IMDb picks`;
        movieSelect.appendChild(movieGroup);
        movieGroups.set(movie.universe, movieGroup);
      }

      group = movieGroups.get(movie.universe);
    }

    group.appendChild(option);
  });

  initSeatBooking(movieSelect);
}

loadMovies();
