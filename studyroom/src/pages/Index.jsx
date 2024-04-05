import React from "react"
import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TaskBoxes from "../components/TaskBoxes"
import { useLocalStorage } from "../hooks/localStorage"

function Index() {
  const [user, _] = useLocalStorage("user", null)

  return (
    <div>
      <Header />
      <TaskBoxes />
      <Footer />
      <div className="flex justify-center">Username: {user}</div>
    </div>
  )
}

export default Index
