import React, { useEffect, useState } from "react"
import axios from "axios"
import { data } from "autoprefixer"
import { useLocalStorage } from "../hooks/localStorage"

function TaskBoxes() {

  const [taskList, setTaskList] = useState("")
  const [username, ] = useLocalStorage("username")

  if (username == null || username == "") {
    return (
      <div>
        <p>You need to login to see your tasks!</p>
      </div>
    )
  }

  const getTasks = async () => {
    await axios
          .get(`http://localhost:5000/api/tasks/${username}`)
          .then(response => {
            console.log(response.data)
            setTaskList(response.data)
          })

  }

  useEffect(() => {
    getTasks()
  }, [])

  if (taskList.length == 0) {
    return (
      <div className="flex justify-center">
        No tasks available. Create your first task and start a nice day.
      </div>
    )
  }

  let appendedTasks = ""

  for (let i = 0; i < taskList.length; i++) {
    console.log(taskList[i].title)
    console.log(taskList[i].time_length)
    appendedTasks += `
      <div classname="flex flex-nowrap">
        Task: ${ taskList[i].title } <br />
        Time Length (in seconds): ${ taskList[i].time_length }
      </div>`
  }

console.log(appendedTasks)

  return (
    <div dangerouslySetInnerHTML={{__html: appendedTasks}} className="flex justify-center">
    </div>
  )
}

export default TaskBoxes