let ticketPrice = 0;

const container = document.querySelector(".seat-map");
const count = document.getElementById("count");
const seatLabel = document.getElementById("seat-label");
const total = document.getElementById("total");

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  seatLabel.innerText = selectedSeatsCount === 1 ? "seat" : "seats";
  total.innerText = selectedSeatsCount * ticketPrice;
}

export function initSeatBooking(movieSelect) {
  ticketPrice = Number(movieSelect.value);

  container.querySelectorAll(".row").forEach((row, rowIndex) => {
    row.querySelectorAll(".seat").forEach((seat, seatIndex) => {
      const rowLabel = String.fromCharCode(65 + rowIndex);
      const seatStatus = seat.classList.contains("occupied")
        ? "occupied"
        : "available";
      const seatLabel = `Seat ${rowLabel}${seatIndex + 1}`;

      seat.dataset.label = seatLabel;
      seat.setAttribute("aria-label", `${seatLabel}, ${seatStatus}`);

      if (!seat.disabled) {
        seat.setAttribute("aria-pressed", "false");
      }
    });
  });

  container.addEventListener("click", (e) => {
    const seat = e.target.closest(".seat");

    if (!seat || seat.disabled || !container.contains(seat)) {
      return;
    }

    seat.classList.toggle("selected");
    seat.setAttribute("aria-pressed", String(seat.classList.contains("selected")));

    const seatStatus = seat.classList.contains("selected")
      ? "selected"
      : "available";

    seat.setAttribute("aria-label", `${seat.dataset.label}, ${seatStatus}`);
    updateSelectedCount();
  });

  movieSelect.addEventListener("change", (e) => {
    ticketPrice = Number(e.target.value);
    updateSelectedCount();
  });
}
