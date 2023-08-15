const express = require("express");
const app = express();
// GET method route
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })

  app.listen(3000, () => {
    console.log("listening port to 3000");
  });