import { useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import Sidebar from "./components/Sidebar.jsx"
import SignupForm from "./components/SignupForm.jsx"
import Index from "./pages/Index.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />

        <Route exact path="/signup" element={<SignupForm />} />

        <Route exact path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  )
}

export default App
