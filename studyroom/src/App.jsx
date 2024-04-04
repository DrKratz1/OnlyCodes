import { useState } from "react"
import Sidebar from "./components/Sidebar.jsx"
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
