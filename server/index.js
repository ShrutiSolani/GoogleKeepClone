const express = require("express");


const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    console.log("Inside index.js");
    res.json({message : "Hello There"});
});

app.listen(PORT, () => {
    console.log("Server started");
})