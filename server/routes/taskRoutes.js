const express = require("express")
const router = express.Router()

// require controller functions
const taskController = require("../controllers/taskController")

// part 1: create a new POST router for user signup
router.post("/add_task", taskController.addTask)

module.exports = router