import { useState } from "react"
import Sidebar from "./components/Sidebar.jsx"
import Footer from "./components/Footer.jsx"
import SignupForm from "./components/SignupForm.jsx"

function App() {
  return (
    <div className="app">
      <Sidebar />
      <SignupForm />
    </div>
  )
}

export default App
