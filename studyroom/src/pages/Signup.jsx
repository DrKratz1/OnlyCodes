import React from "react"
import { Link } from "react-router-dom"
import SignupForm from "../components/SignupForm"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

function Signup() {
  return (
    <div>
      <Sidebar />
      <div id = "rectangle" className = "flex justify-center items-center rounded-xl border-4 border-blue-900" >
        <SignupForm />
      </div>

      <Footer />
    </div>
  )
}

export default Signup
