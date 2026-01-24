let ticketPrice = 0;

const container = document.querySelector('.container');
const count = document.getElementById('count');
const total = document.getElementById('total');

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

export function initSeatBooking(movieSelect) {
  ticketPrice = Number(movieSelect.value);

  container.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('seat') &&
      !e.target.classList.contains('occupied')
    ) {
      e.target.classList.toggle('selected');
      updateSelectedCount();
    }
  });

  movieSelect.addEventListener('change', (e) => {
    ticketPrice = Number(e.target.value);
    updateSelectedCount();
  });
}
