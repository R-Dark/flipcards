const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const models = require('./models')
app.use( express.static('public'))
app.use(bodyParser.json())

const mainRoutes = require("./routes/mainRoutes")
app.use(mainRoutes)

app.listen(3000, function(req, res){
  console.log("Robots are listening!");
})
