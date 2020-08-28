const express = require("express");
const app = express();
const path = require("path");

app.listen(4000, () => {
    console.log("Server listening on 4000");
});

app.use("/js-oidc-sdk", express.static(path.resolve(__dirname, "node_modules/@asgardio/js-oidc-sdk")))
app.use("/convert-usd-to-lkr", express.static(path.resolve(__dirname, "node_modules/convert-usd-to-lkr")))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});
