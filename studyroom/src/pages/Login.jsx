import React from "react"
import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import LoginForm from "../components/LoginForm"

function Login() {
  return (
    <div>
      <Sidebar />
      <div id = "rectangle" className = "flex justify-center items-center rounded-xl border-4 border-violet-300 shadow-xl" >
        <LoginForm />
      </div>

      <Footer />
    </div>
  )
}

export default Login
