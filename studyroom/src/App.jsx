import { useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import Sidebar from "./components/Sidebar.jsx"
import Footer from "./components/Footer.jsx"
import Signup from "./pages/Signup.jsx"
import Index from "./pages/Index.jsx"
import Login from "./pages/Login.jsx"
import Header from "./components/Header.jsx"
import TaskBoxes from "./components/TaskBoxes.jsx"
import Task from "./pages/Task.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/Header" element={<Header />} />
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/sidebar" element={<Sidebar />} />

        <Route exact path="/TaskBoxes" element={<TaskBoxes />} />
        <Route exact path="/Task" element={<Task />} />
      </Routes>
    </Router>
  )
}

export default App
