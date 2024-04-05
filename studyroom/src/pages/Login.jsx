import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginForm from "../components/LoginForm"

function Login() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div id = "rectangle" className = "flex justify-center items-center rounded-xl border-4 border-blue-900" >
        <LoginForm />
      </div>

      <Footer />
    </div>
  )
}

export default Login
