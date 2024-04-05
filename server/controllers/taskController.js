const Task = require("../models/Task")

const addTask = async (req, res) => {
    const {username, title, minute, second, subtask} = req.body
    const timeLength = parseInt(minute) * 60 + parseInt(second);
    try {
        const newTask = new Task({username, title, timeLength, subtask})
        await  newTask.save()
    } catch(error) {
        console.error("Error creating the task: ", error)
        res.status(500).second("Error adding the new task: " + error.message)
    }
}