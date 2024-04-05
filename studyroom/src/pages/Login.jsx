import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginForm from "../components/LoginForm"

function Login() {
  return (
    <div>
      <Header />

      <LoginForm />

      <Footer />
    </div>
  )
}

export default Login
