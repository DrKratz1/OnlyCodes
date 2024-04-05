import React from "react"

function Sidebar() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-40 m-0
    flex flex-col bg-gradient-to-r from-blue-950 to-blue-800 shadow-lg items-center">
      <a href="/">
        <button>
          <img src="/assets/logo.jpeg" alt="" />
        </button>
      </a>
      <a href="/login" className="pb-4">
        <button className=" bg-yellow-50 px-4 py-2 rounded-lg">LOGIN</button>
      </a>
      <a href="/signup">
        <button className=" bg-yellow-50 px-4 py-2 rounded-lg">Sign Up</button>
      </a>

      <a href="/add_task">
        <button className=" bg-yellow-50 px-4 py-2 rounded-lg">Add Task</button>
      </a>
    </div>
  )
}

export default Sidebar
