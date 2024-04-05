// Import the user model refer Task.js
const Task = require("../models/Task")


const addTask = async (req, res) => {
    const { username, title, minute, second } = req.body

    let timeLength = parseInt(minute) * 60 + parseInt(second)

    try {
        const newTask = new Task({ 
            username: username, 
            title: title, 
            time_length: timeLength })

        await newTask.save()
        res.status(201).send("Task added successfully")
    } catch(error) {
        console.error("Error creating the user: ", error)
        res.status(500).send("Error creating the user: " + error.message)
    }
}

module.exports = { addTask }