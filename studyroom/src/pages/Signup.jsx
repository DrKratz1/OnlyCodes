import React from "react"
import { Link } from "react-router-dom"
import SignupForm from "../components/SignupForm"
import Sidebar from "../components/Sidebar"

function Signup() {
  return (
    <div>
      <Sidebar />
      <SignupForm />
    </div>
  )
}

export default Signup
