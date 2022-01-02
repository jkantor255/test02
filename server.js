const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

obiekt = {imie: "Jolanta", nazwisko: "Kantor", klasa: "3I1", grupa: "1"}


app.get("/", function (req, res) {
    res.send("<h1>first app on heroku! - kolejna zmiana w pliku</h1>")
})

app.get("/data", function (req, res) {
    res.send(obiekt)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

