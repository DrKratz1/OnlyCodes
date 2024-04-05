import React from "react"
import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { useLocalStorage } from "../hooks/localStorage"

function Index() {
  const [user, _] = useLocalStorage("user", null)

  return (
    <div>
      <Sidebar />
      <h1 className="font-bold text-center text-4xl">Index</h1>
      <div className="flex justify-center">Username: {user}</div>
    </div>
  )
}

export default Index
