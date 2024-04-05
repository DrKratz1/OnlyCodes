const express = require("express")
const router = express.Router()


const taskController = require("../controllers/taskController")

router.post("/add_task", taskController.addTask)

module.exports = router