import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Stopwatch from "../components/Stopwatch"

function NewTask() {
  return (
    <div>
      <Header title = "Task 1"/>
      <h1><Stopwatch /></h1>     
      
    <div>
      <Footer />
    </div>
  </div>
  )
}

export default NewTask
