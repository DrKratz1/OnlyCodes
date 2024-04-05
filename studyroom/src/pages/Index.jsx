import React from "react"
import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TaskBoxes from "../components/TaskBoxes"
import { useLocalStorage } from "../hooks/localStorage"

function Index() {
  const [user, _] = useLocalStorage("user", null)

  return (
    <div>
      <Header title='"The only time success comes before work is in the dictionary"' />
      <TaskBoxes />

      <h1 className="font-bold text-center text-4xl">Index</h1>
      <ul
        className="text-center my-2 text-blue-500 underline
      underline-offset-2 ">
        <li className="text-blue-500 underline">
          <Link to="/">Index</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/sidebar">Side bar</Link>
        </li>

        <div>Username: {user}</div>
      </ul>

      <Footer />
    </div>
  )
}

export default Index
