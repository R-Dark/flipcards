const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const models = require('./models')
const session = require("express-session")
app.use( express.static('public'))
app.use(bodyParser.json())
var sess = {
  secret: "robsite",
  cookie: {},
  saveUninitialized: true,
  resave: true
}
app.use(session(sess))

const usersRoutes = require("./routes/users")
app.use(usersRoutes)

const decksRoutes = require("./routes/decks")
app.use(decksRoutes)

const cardsRoutes = require("./routes/cards")
app.use(cardsRoutes)

const loginRoutes = require("./routes/login")
app.use(loginRoutes)

app.listen(3000, function(req, res){
  console.log("Robots are listening!");
})
