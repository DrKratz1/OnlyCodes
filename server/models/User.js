// import the mongoose package
const mongoose = require("mongoose")

// part 3: create a user login schema
const userSchema = new mongoose.Schema({
  // add required tag so that all entries to the database must have
  // username and password
  // add unique tag so that no two users can have the same username
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

// export the User schema
module.exports = mongoose.model("User", userSchema)
