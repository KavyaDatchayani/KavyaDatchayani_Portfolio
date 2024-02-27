const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true,
}));



app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");
});

app.get("/resume", (req, res) => {
    res.sendFile(__dirname + "/resume.html");
});

const port = 3000;

app.listen(port, () => {
    console.log("Iam listening to Port 3000, Do your work!");
})