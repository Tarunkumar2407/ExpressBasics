const express = require("express")
const app = express();

app.get("/", ((req, res) => {
    res.send("Hello world... I am Expreess :) ");
}));

app.get("/about", ((req, res) => {
    res.send("Hi am About Page")
}));

app.listen(3000, ()=> {
    console.log("listening port to 3000")
})