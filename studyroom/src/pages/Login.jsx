import React from "react"
import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import LoginForm from "../components/LoginForm"

function Login() {
  return (
    <div>
      <Sidebar />
      <LoginForm />
    </div>
  )
}

export default Login
