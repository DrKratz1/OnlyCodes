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

  task: {
    type: [Object],
    default: [
      {
        name: "Task 1",
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        notes: "",
      },
      {
        name: "Task 2",
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        notes: "",
      },
      {
        name: "Task 3",
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        notes: "",
      },
      {
        name: "Task 4",
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        notes: "",
      },
      {
        name: "Task 5",
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        notes: "",
      },
      {
        name: "Task 6",
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        notes: "",
      },
    ],
  },

})

// export the User schema
module.exports = mongoose.model("User", userSchema)
