import React, { useState, useEffect } from "react"
import axios from "axios"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Stopwatch from "../components/Stopwatch"
import FinishTaskButton from "../components/FinishTaskButton"
import NotesSection from "../components/NotesSection"
import { useLocalStorage } from "../hooks/localStorage"

function Task() {
  const [username, _] = useLocalStorage("username", null)
  const [user, setUser] = useState("")
  const [task, setTask] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:5000/api/users/", {
          username,
          task,
        })
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].username === username) setUser(res.data[i].username)
          setTask(res.data[i].task)
        }
      } catch (error) {
        if (error.response) {
          console.error("Login Error:", error.response.data)
        } else if (error.request) {
          console.error("No response received: ", error.request)
        } else {
          console.error("Error", error.message)
        }
      }
    }
    fetchData()
  }, [username])

  return (
    <div>
      <Header title="Task 1" />
      <div className="Container">
        <Stopwatch />
        <div className="NotesContainer">
          <NotesSection />
          <FinishTaskButton />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Task
