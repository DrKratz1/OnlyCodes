import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Stopwatch from "../components/Stopwatch"
import FinishTaskButton from "../components/FinishTaskButton"
import { MdNotAccessible } from "react-icons/md"
import NotesSection from "../components/NotesSection"

function Task() {
  return (
    <div>
      <Header title="Task 1" />
      <h1>
        <Stopwatch />
      </h1>
      <div>
        <NotesSection />
      </div>
      <FinishTaskButton />

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Task
