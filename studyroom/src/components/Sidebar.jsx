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
      <a href="/login">
        <button className=" bg-yellow-50 px-4 rounded-lg">LOGIN</button>
      </a>
      <i>C</i>
    </div>
  )
}

export default Sidebar
