const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        time_length: {
            type: Number,
            required: true,
        }, 

        subtask: {
            type: [String],
            default: [],
        },
    }
)


module.exports = mongoose.model("Task", taskSchema)