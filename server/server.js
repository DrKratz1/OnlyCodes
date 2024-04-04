// Import used modules
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoutes = require("./routes/userRoutes")
require("dotenv").config() // Covered later

// Import database model
const User = require('./models/User')

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

// Connect to database (covered later)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to MongDB and server is running on port${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })


app.get('/users', async (req, res) => {
  try {
      const users = await User.find({});
      res.status(200).json(users);
  } catch(error) {
      res.status(500).json({message:error.message});
  }
});