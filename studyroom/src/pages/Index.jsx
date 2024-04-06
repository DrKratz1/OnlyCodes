import React from "react"
import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TaskBoxes from "../components/TaskBoxes"
import { useLocalStorage } from "../hooks/localStorage"
import TaskCarousel from "../components/TaskCarousel"
import FinishTaskButton from "../components/FinishTaskButton"

function Index() {
  const [user, _] = useLocalStorage("username", null)

  return (
    <div className="overflow-x-hidden">
      <Header title='"The only time success comes before work is in the dictionary"' />
      <TaskCarousel />
      <FinishTaskButton/>
      <Footer />
    </div>
  )
}

export default Index
