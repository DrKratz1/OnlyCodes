// Import the user model refer User.js
const User = require("../models/User")


const addTask = async (req, res) => {
    const { username, title, minute, second, subtask} = req.body

    timeLength = parseInt(minute) * 60 + second

    try {
        const newTask = new Task({ username, title, timeLength, subtask })
        await newTask.save()
        res.status(201).send("Task added successfully")
    } catch(error) {
        console.error("Error creating the user: ", error)
        res.status(500).send("Error creating the user: " + error.message)
    }
}

module.exports = { addTask }