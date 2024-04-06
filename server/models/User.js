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
        src: "/assets/TaskPic4.jpeg",
      },
      {
        name: "Task 2",
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        notes: "",
        src: "/assets/TaskPic2.jpeg",
      },
      {
        name: "Task 3",
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        notes: "",
        src: "/assets/TaskPic3.jpeg",
      },
      {
        name: "Task 4",
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        notes: "",
        src: "/assets/TaskPic1.jpeg",
      },
      {
        name: "Task 5",
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        notes: "",
        src: "/assets/TaskPic6.jpeg",
      },
      {
        name: "Task 6",
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        notes: "",
        src: "/assets/WallpaperPink.jpeg",
      },
    ],
  },
})

// export the User schema
module.exports = mongoose.model("User", userSchema)
