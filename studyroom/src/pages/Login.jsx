import React from "react"
import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import LoginForm from "../components/LoginForm"

function Login() {
  return (
    <div>
      <Sidebar />
      
      <LoginForm />

      <Footer />
    </div>
  )
}

export default Login
