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
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mb-10 mx-auto">
        <div>
          <label className="">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="p-0 bg-transparent border-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex justify-center">
          <label className="">Password: </label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-0 bg-transparent border-2 rounded-md focus:outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-center bg-violet-200 rounded-md px-3 py-1">
        Signup
      </button>
    </form>
  )
}

export default SignupForm
