import React from "react"

function TaskBoxes() {
  return (
    <div className = "h-screen flex items-center justify-center">
      <a href = "/NewTask">
        <button class="cursor-pointer px-20 h-96 rounded text-white text-xl font-extrabold">
        NEW TASK
        <img src="/assets/TaskPic1.jpeg" alt = "TaskPic1" width = "200"
        className="rounded-md outline-3 outline-blue-950"/>
        
        </button>
    </a>
      
    </div>
    
  )
}

export default TaskBoxes