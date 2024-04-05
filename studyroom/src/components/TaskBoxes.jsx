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
      <div>
        No tasks available. Create your first task and start a nice day.
      </div>
    )
  }

  let appendedTasks = <></>


  return (
    <div>
      { JSON.stringify(taskList) }
    </div>
  )
}

export default TaskBoxes