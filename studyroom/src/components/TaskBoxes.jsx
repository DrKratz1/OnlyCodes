import React from "react"

function TaskBoxes() {
  return (
    <div
      id="image-track"
      data-mouse-down-at="0"
      data-prev-percentage="0"
      className="flex items-center justify-center">
      <a href="/NewTask" draggable="false">
        <button
          class="cursor-pointer px-10 h-48 rounded text-white text-xl font-extrabold"
          draggable="false">
          NEW TASK
          <img
            src="/assets/TaskPic1.jpeg"
            alt="TaskPic1"
            width="200"
            className="image rounded"
            draggable="false"
          />
        </button>
      </a>
      <a href="/NewTask" draggable="false">
        <button class="cursor-pointer px-10 h-48 rounded text-white text-xl font-extrabold">
          NEW TASK
          <img
            src="/assets/TaskPic2.jpeg"
            alt="TaskPic2"
            width="200"
            className="image rounded"
            draggable="false"
          />
        </button>
      </a>
      <a href="/NewTask" draggable="false">
        <button class="cursor-pointer px-10 h-48 rounded text-white text-xl font-extrabold">
          NEW TASK
          <img
            src="/assets/TaskPic4.jpg"
            alt="TaskPic4"
            width="200"
            className="image rounded"
            draggable="false"
          />
        </button>
      </a>
      <a href="/NewTask" draggable="false">
        <button class="cursor-pointer px-10 h-48 rounded text-white text-xl font-extrabold">
          NEW TASK
          <img
            src="/assets/TaskPic5.jpg"
            alt="TaskPic5"
            width="200"
            className="image rounded"
            draggable="false"
          />
        </button>
      </a>
      <a href="/NewTask" draggable="false">
        <button class="cursor-pointer px-10 h-48 rounded text-white text-xl font-extrabold">
          NEW TASK
          <img
            src="/assets/TaskPic6.png"
            alt="TaskPic6"
            width="200"
            className="image rounded"
            draggable="false"
          />
        </button>
      </a>
      <a href="/NewTask" draggable="false">
        <button class="cursor-pointer px-10 h-48 rounded text-white text-xl font-extrabold">
          NEW TASK
          <img
            src="/assets/TaskPic7.png"
            alt="TaskPic7"
            width="200"
            className="image rounded"
            draggable="false"
          />
        </button>
      </a>
      <a href="/NewTask" draggable="false">
        <button class="cursor-pointer px-10 h-48 rounded text-white text-xl font-extrabold">
          NEW TASK
          <img
            src="/assets/TaskPic8.png"
            alt="TaskPic8"
            width="200"
            className="image rounded"
            draggable="false"
          />
        </button>
      </a>
    </div>
  )
}

export default TaskBoxes
