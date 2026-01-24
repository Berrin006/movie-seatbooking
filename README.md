# Movie Seat Booking

## Beskrivning
Detta projekt är en Movie Seat Booking-applikation där användare kan:
- Välja en film från dropdown
- Välja lediga säten
- Se antal valda säten och totalpris uppdateras dynamiskt
- Occupied-säten går ej att klicka på

Projektet bygger på en **befintlig HTML/CSS-bas**. Min huvudsakliga insats har varit all **JavaScript-logik**.

## Dag-för-dag loggbok

### Dag 1
- Implementerade seat selection med klick och toggle
- Dynamisk uppdatering av antal valda säten och pris

### Dag 2
- Skapade Movie-klass
- Satte upp JSON-server med movies-data
- Hämtade filmer via fetch och fyllde dropdown dynamiskt

### Dag 3
- Delade upp koden i moduler (`Movie.js`, `api.js`, `seatBooking.js`, `main.js`)
- Kopplade seat booking-logik till vald film
- Anpassade fallback för GitHub Pages

## Teknisk info
- JavaScript (ES6-moduler)
- JSON-server lokalt
- Dynamisk prisuppdatering
- GitHub Pages publicerad statisk version


