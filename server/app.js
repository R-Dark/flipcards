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

app.listen(3000, function(req, res){
  console.log("Robots are listening!");
})
