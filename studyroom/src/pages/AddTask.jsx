import React from "react"
import { Link } from "react-router-dom"
import AddTaskForm from "../components/AddTaskForm"
import Sidebar from "../components/Sidebar"

function AddTask() {
  return (
    <div>
      <Sidebar />
      <AddTaskForm />
    </div>
  )
}

export default AddTask
