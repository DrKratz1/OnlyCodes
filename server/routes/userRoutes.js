// initialise a new express router to handle routes
const express = require("express")
const router = express.Router()

// require controller functions
const userController = require("../controllers/userController")

// part 1: create a new POST router for user signup
router.post("/signup", userController.signup)

module.exports = router
