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
// app.get('/ab(cd)?e', (req, res) => {
//   res.send('ab(cd)?e')
// })

// app.get('/ab(cd)?e', (req, res) => {
//   res.send('ab(cd)?e')
// })

// callbacks
// app.get('/callbacks', (req, res, next) => {
//   console.log('the response will be sent by the next function ...')
//   next()
// }, (req, res) => {
//   res.send('Hello from B!')
// })

// 

// A combination of independent functions and arrays of functions can handle a rout

const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

app.get('/callbacks', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
})

app.listen(3000, () => {
  console.log("listening port to 3000");
});
