// Import used modules
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoutes = require("./routes/userRoutes")
const User = require("./models/User")
require("dotenv").config() // Covered later

// Create an Express application
const app = express()
const PORT = process.env.PORT || 5000

// Initiate middleware
app.use(cors())
app.use(express.json())

// Part 4: Add in our new user signup route
// Note that the default route is /api/users
// i.e. full route is localhost:5000/api/users/signup
app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
  res.send("Hello Worldy")
})

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json(users)
  } catch {
    res.status(500).send("Error fetching users")
  }
})

app.get("/api/user/:id", async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Connect to database (covered later)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to MongDB and server is running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
