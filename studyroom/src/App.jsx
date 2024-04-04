import { useState } from "react"
import Sidebar from "./components/Sidebar.jsx"
import Footer from "./components/Footer.jsx"
import SignupForm from "./components/SignupForm.jsx"
import TaskBoxes from "./components/TaskBoxes.jsx"

function App() {
  return (
    <div className="app">
      <TaskBoxes />
      <Sidebar />
      <Footer />
      <SignupForm />
    </div>
  )
}

export default App
