import React, { useState } from "react"
import axios from "axios"
import { data } from "autoprefixer"
import { useLocalStorage } from "../hooks/localStorage"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [, setUser] = useLocalStorage("user", null)
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
          setUser(username)
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
      <h1 className="flex text-3xl my-8 justify-center text-white">Login</h1>
      <form onSubmit={handleSubmit} className="justify-center">
        <div className="flex flex-col mb-5 mx-auto items-center">
          <div className="pb-2">
            <label className="text-white">Username: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-transparent border-2 rounded-md focus:outline-green-500 text-white"
            />
          </div>
          <div className="pb-2">
            <label className="text-white">Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-transparent border-2 rounded-md focus:outline-green-500 text-white"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-center bg-violet-200 rounded-md px-3 py-1 shadow-md border-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
