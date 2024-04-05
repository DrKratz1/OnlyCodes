import React, { useState } from "react"
import axios from "axios"
import { useLocalStorage } from "../hooks/localStorage"

function AddTaskForm() {
    const [username, ] = useLocalStorage("username")
    const [title, setTitle] = useState("")
    const [minute, setMinute] = useState("")
    const [second, setSecond] = useState("")


    if (username == null || username == "") {
        window.location.href="/login"
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const res = await axios.post("http://localhost:5000/api/tasks/add_task", {
                username,
                title,
                minute,
                second
            })
            console.log("Add Task Success", res.data)
            window.location.href = "/"
        } catch (error) {
            if (error.response) {
                console.error("Add Task Error:", error.response.data)
            } else if (error.request) {
                console.error("No response received: ", error.request)
            } else {
                console.error("Error", error.message)
            }
        }
    }

    return (
        <div>
            <h1 className="flex text-3xl my-20 justify-center">Add Task</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-5 mx-auto items-center">
                    <div className="pb-2">
                        <label className="">Title: </label>
                        <input 
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="p-0 bg-transparent border-2 rounded-md focus:outline-none"
                            /> 
                    </div>
                    <div className="pb-2">
                        <label className="">Minutes: </label>
                        <input 
                            type="text"
                            value={minute}
                            onChange={(e) => setMinute(e.target.value)}
                            required
                            className="p-0 bg-transparent border-2 rounded-md focus:outline-none"
                            /> 
                    </div>
                    <div className="pb-2">
                        <label className="">Seconds: </label>
                        <input 
                            type="text"
                            value={second}
                            onChange={(e) => setSecond(e.target.value)}
                            required
                            className="p-0 bg-transparent border-2 rounded-md focus:outline-none"
                            /> 
                    </div>
                    <button
                    type="submit"
                    className="text-center bg-violet-200 rounded-md px-3 py-1">
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTaskForm