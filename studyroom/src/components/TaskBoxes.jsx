import React from "react"

function TaskBoxes() {
  return (
    <div id = "image-track" className = "h-screen flex items-center justify-center">
      <a href = "/NewTask">
        <button class="cursor-pointer px-20 h-96 rounded text-white text-xl font-extrabold">
        NEW TASK
        <img src="/assets/TaskPic1.jpeg" alt = "TaskPic1" width = "200"
        className="rounded-md outline-3 outline-blue-950"/>
        
        </button>
      </a>
      <a href = "/NewTask">
          <button class="cursor-pointer px-20 h-96 rounded text-white text-xl font-extrabold">
          NEW TASK
          <img src="/assets/TaskPic2.jpeg" alt = "TaskPic2" width = "200"
          className="rounded-md outline-3 outline-blue-950"/>
          
          </button>
      </a>
      <a href = "/NewTask">
          <button class="cursor-pointer px-20 h-96 rounded text-white text-xl font-extrabold">
          NEW TASK
          <img src="/assets/TaskPic4.jpg" alt = "TaskPic4" width = "200"
          className="rounded-md outline-3 outline-blue-950"/>
          
          </button>
      </a>
      <a href = "/NewTask">
          <button class="cursor-pointer px-20 h-96 rounded text-white text-xl font-extrabold">
          NEW TASK
          <img src="/assets/TaskPic5.jpg" alt = "TaskPic5" width = "200"
          className="rounded-md outline-3 outline-blue-950"/>
          
          </button>
      </a>
      <a href = "/NewTask">
          <button class="cursor-pointer px-20 h-96 rounded text-white text-xl font-extrabold">
          NEW TASK
          <img src="/assets/TaskPic6.png" alt = "TaskPic6" width = "200"
          className="rounded-md outline-3 outline-blue-950"/>
          
          </button>
      </a>
      <a href = "/NewTask">
          <button class="cursor-pointer px-20 h-96 rounded text-white text-xl font-extrabold">
          NEW TASK
          <img src="/assets/TaskPic7.png" alt = "TaskPic7" width = "200"
          className="rounded-md outline-3 outline-blue-950"/>
          
          </button>
      </a>
      <a href = "/NewTask">
          <button class="cursor-pointer px-20 h-96 rounded text-white text-xl font-extrabold">
          NEW TASK
          <img src="/assets/TaskPic8.png" alt = "TaskPic8" width = "200"
          className="rounded-md outline-3 outline-blue-950"/>
          
          </button>
      </a>
    </div>
    
  )
}

export default TaskBoxes