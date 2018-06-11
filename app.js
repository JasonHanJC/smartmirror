const express = require("express");
const app = express();

app.set("view engine", "ejs");

/**
 * Routes
**/

// home
app.get("/", function(req, res) {
    res.send("This is the home page.");
});


app.listen(3000, function() {
    console.log("Smartmirror host server is running...");
});