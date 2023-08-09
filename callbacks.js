const express = require("express");
const app = express();
// GET method route
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});
// app.get("/about", (req, res) => {
//   res.send("about");
// });
// app.get('/random.text', (req, res) => {
//   res.send('random.text')
// })
// app.get('/ab?cd', (req, res) => {
//   res.send('ab?cd')
// })
// app.get('/ab+cd', (req, res) => {
//   res.send('ab+cd')
// })
// app.get('/ab*cd', (req, res) => {
//   res.send('ab*cd')
// })
app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e')
})

app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e')
})

app.listen(3000, () => {
  console.log("listening port to 3000");
});
