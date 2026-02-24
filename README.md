🎬 Movie Seat Booking
📌 Beskrivning

En Movie Seat Booking-applikation byggd i JavaScript där användaren kan välja film och boka lediga biografstolar. Antal valda säten och totalpris uppdateras dynamiskt, och upptagna platser kan inte väljas.

Projektet bygger på en förgiven HTML- och CSS-bas, medan all funktionalitet är implementerad i JavaScript med ES6-moduler.

✨ Funktionalitet

Välj film från dropdown (hämtas från JSON-server)

Markera och avmarkera lediga säten

Upptagna säten kan inte väljas

Dynamisk uppdatering av antal valda säten och totalpris

Fallback-data används om API inte är tillgängligt (t.ex. på GitHub Pages)

🛠 Teknisk lösning

JavaScript (ES6-moduler)

Movie-klass för filmdata

JSON-server (lokalt REST API)

Moduluppdelad kod:

Movie.js

api.js

seatBooking.js

main.js

GitHub Pages (statisk deployment)

📅 Dag-för-dag loggbok
Dag 1

Implementerade sätesbokning via klick

Dynamisk uppdatering av pris och antal valda säten

Dag 2

Skapade Movie-klass

Kopplade projektet till JSON-server

Implementerade datahämtning via fetch

Dag 3

Delade upp koden i moduler

Kopplade filmval till sätesbokning

Lade till fallback-data för publicering på GitHub Pages

Uppdaterade pris- och filmhantering

🧪 Kodkvalitet

Installerade och konfigurerade ESLint för projektet

Kör eslint --fix för automatisk kodformatering

Fixade no-unused-vars i api.js

Verifierade att projektet passerar linting utan fel

🚀 Live och Repository

🌐 Live demo:
👉 https://berrin006.github.io/movie-seatbooking/

💻 GitHub repo:
👉 https://github.com/Berrin006/movie-seatbooking
