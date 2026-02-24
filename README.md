🎬 Movie Seat Booking
📌 Beskrivning

En Movie Seat Booking-applikation byggd i JavaScript där användaren kan välja film och boka lediga biografstolar. Antal valda säten och totalpris uppdateras dynamiskt, och redan upptagna platser kan inte väljas.

Projektet bygger på en förgiven HTML- och CSS-bas, medan all funktionalitet är implementerad i JavaScript med ES6-moduler.

✨ Funktionalitet

🎥 Välj film från dropdown (hämtas från JSON-server)

🎫 Markera och avmarkera lediga säten

❌ Upptagna säten kan inte väljas

💰 Dynamisk uppdatering av antal säten och totalpris

🔄 Fallback-data används om API inte är tillgängligt (t.ex. på GitHub Pages)

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

🧪 Kodkvalitet

Installerade och konfigurerade ESLint

Kör eslint --fix för automatisk kodformatering

Fixade no-unused-vars i api.js

Verifierade att projektet passerar linting utan fel

🚀 Live och Repository

🌐 Live demo:
👉 https://Berrin006.github.io/movie-seatbooking/

💻 GitHub repo:
👉 https://github.com/Berrin006/movie-seatbooking

▶️ Hur man kör projektet
Alternativ 1 (Rekommenderas)

Klona repositoryt:

git clone https://github.com/Berrin006/movie-seatbooking.git

Öppna projektmappen.

Högerklicka på index.html → välj Open with Live Server (om du har Live Server extension).

Alternativ 2

Öppna projektmappen.

Dubbelklicka på index.html för att starta applikationen i webbläsaren.

Om JSON-server lokalt ska köras

Om du vill testa API-hämtning lokalt:

npm install
npm run server

Servern startar på:
http://localhost:3000
