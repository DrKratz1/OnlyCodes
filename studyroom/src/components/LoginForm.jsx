import React, { useState } from "react"
import axios from "axios"
import { data } from "autoprefixer"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  let userLoggedIn = false

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.get("http://localhost:5000/api/users", {
        username,
        password,
      })
      // locating user in database
      for (let i = 0; i < res.data.length; i++) {
        if (
          res.data[i].username === username &&
          res.data[i].password === password
        ) {
          userLoggedIn = true
          console.log(`Successfully logged in as ${username}`)
          window.location.href = "/"
        }
      }

      // user not found
      if (!userLoggedIn) {
        console.log("Invalid username or password")
      }
    } catch (error) {
      if (error.response) {
        console.error("Login Error:", error.response.data)
      } else if (error.request) {
        console.error("No response received: ", error.request)
      } else {
        console.error("Error", error.message)
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="justify-center">
        <div className="flex flex-col mb-5 mx-auto items-center">
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-transparent border-2 rounded-md focus:outline-green-500"
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-transparent border-2 rounded-md focus:outline-green-500"
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
