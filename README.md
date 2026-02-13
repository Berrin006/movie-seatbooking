Movie Seat Booking

Beskrivning:

- En Movie Seat Booking-applikation byggd i JavaScript där användaren kan välja film och boka lediga biografstolar. Antal valda säten och totalpris uppdateras dynamiskt, och redan upptagna platser kan inte klickas.
- Projektet bygger på en förgiven HTML- och CSS-bas, medan all funktionalitet är implementerad i JavaScript med ES6-moduler.

Funktionalitet:

- Välj film från dropdown (hämtas från JSON-server)
- Markera/avmarkera lediga säten
- Occupied-säten kan inte väljas
- Dynamisk uppdatering av antal säten och totalpris
- Fallback-data används vid publicering på GitHub Pages

Teknisk lösning:

- JavaScript (ES6-moduler)
- Movie-klass för filmdata
- JSON-server (REST API) lokalt
- Moduluppdelad kod (Movie.js, api.js, seatBooking.js, main.js)
- GitHub Pages (statisk version)

Dag-för-dag loggbok:

Dag 1:

- Sätesbokning med klick och dynamisk prisuppdatering

Dag 2:

- Movie-klass och JSON-server
- Hämtning av filmer via fetch

Dag 3:

- Modulindelning av koden
- Koppling mellan filmval och sätesbokning
- Fallback för GitHub Pages
- Uppdaterade priser och lade till film


Komplettering 1:

- Installerat ESLint och konfigurerat projektet för webbläsarmiljö.

- Kört eslint --fix för att automatisera formatering av semikolon och citattecken i alla moduler.

- Åtgärdat manuellt "no-unused-vars" i api.js för att rensa bort oanvänd felhanteringskod.

- Verifierat att koden nu passerar linting utan anmärkningar.

Länkar:


- Live: https://berrin006.github.io/movie-seatbooking/
- Repo: https://github.com/Berrin006/movie-seatbooking
