import React from "react"
import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TaskBoxes from "../components/TaskBoxes"

function Index() {
  return (
    <div>
      <Header /> 
      
      <TaskBoxes /> 
      <Footer />
    </div>
  )
}

export default Index
