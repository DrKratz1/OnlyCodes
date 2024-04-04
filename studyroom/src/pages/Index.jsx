import React from "react"
import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const Index = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-4xl">Index</h1>
      <ul
        className="text-center my-2 text-blue-500 underline
      underline-offset-2 ">
        <li className="text-blue-500 underline">
          <Link to="/">Index</Link>
        </li>

        <li>
          <Link to="/signup">Sign up</Link>
        </li>

        <li>
          <Link to="/sidebar">Side bar</Link>
        </li>
      </ul>
      <Sidebar />
    </div>
  )
}

export default Index
