const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

obiekt = {imie: "Imię", nazwisko: "Nazwisko", klasa: "klasa", grupa: "grupa"}


app.get("/", function (req, res) {
    res.send("<h1>first app on heroku! - kolejna zmiana w pliku</h1>")
})

app.get("/data", function (req, res) {
    res.send(obiekt)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

