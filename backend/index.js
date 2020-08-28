const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/access-token",cors({origin: "*"}), (req, res) => {
    if (req.body.accessToken) {
        console.log("\n")
        console.log("\x1b[33m%s\x1b[0m","New Access Token Arrived!",);
        console.log("\x1b[32m%s\x1b[0m",req.body.accessToken);
        res.status(200).send();
    }

    res.status(400).send();
});

app.listen(5000, () => {
    console.log("Server listening on port 5000.");
});
