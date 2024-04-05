import React from "react"

function TaskBoxes() {
  return (
    <div className = "h-screen flex items-center justify-center">
      <a href = "https://www.youtube.com/watch?v=b0pkpcD8Ms4">
        <button class="cursor-pointer px-20 pt-5 pb-5 h-64 rounded text-white text-xl 
        bg-gradient-to-r from-cyan-500 bg-blue-900 hover:animate-bounce">
        NEW TASK
        </button>
    </a>
      
    </div>
    
  )
}

export default TaskBoxes