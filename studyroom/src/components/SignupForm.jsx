import React, { useState } from "react"
import axios from "axios"

function SignupForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post("http://localhost:5000/api/users/signup", {
        username,
        password,
      })
      console.log("Signup Success", res.data)
      window.location.href = "/login"
    } catch (error) {
      if (error.response) {
        console.error("Signup Error:", error.response.data)
      } else if (error.request) {
        console.error("No response received: ", error.request)
      } else {
        console.error("Error", error.message)
      }
    }
  }

  return (
    <div>
      <h1 className="flex text-3xl my-8 justify-center text-white">Sign Up</h1>
      <form onSubmit={handleSubmit} className="justify-center">
        <div className="flex flex-col mb-5 mx-auto items-end">
          <div className="pb-2">
            <label className="text-white">Username: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="p-0 bg-transparent border-2 rounded-md focus:outline-none justify-items-start text-white"
            />
          </div>
          <div className="pb-2">
            <label className="text-white">Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-0 bg-transparent border-2 rounded-md focus:outline-none justify-items-start text-white"
            />
          </div>
          <button
            type="submit"
            className="text-center bg-violet-200 rounded-md px-3 py-1 shadow-md">
            Signup
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
