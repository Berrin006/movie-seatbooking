import { fetchMovies } from './api.js';
import { initSeatBooking } from './seatBooking.js';

const movieSelect = document.getElementById('movie');

async function loadMovies() {
  const movies = await fetchMovies();

  movieSelect.innerHTML = '';

  movies.forEach((movie) => {
    const option = document.createElement('option');
    option.value = movie.price;
    option.textContent = `${movie.title} (${movie.price} kr)`;
    movieSelect.appendChild(option);
  });

  initSeatBooking(movieSelect);
}

loadMovies();
