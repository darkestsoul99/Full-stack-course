import express from "express";
import bodyParser from "body-parser";
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req, res) => {
    var firstName = req.body["fName"];
    var lastName = req.body["lName"];
    var letterCount = firstName.length + lastName.length;
    res.render("index.ejs", {letterCount: letterCount});
});

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
