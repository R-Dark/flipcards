const express = require("express")
const router = express.Router()
const models = require("../models")



router.get("/flipcards", function(req, res) {
  models.flipcards.findAll()
    .then(function(flipcards) {
      res.json(flipcards)
    })
})

router.post("/flipcards", function(req, res) {
  const newFlip = models.flipcards.build({
    question: req.body.question,
    answer: req.body.answer
  })
  newFlip.save().then(function(flipcards) {
    res.json({
      success: true
    })
  })
})

module.exports = router
