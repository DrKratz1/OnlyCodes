import React, { useEffect, useState } from "react"
import axios from "axios"
import { useLocalStorage } from "../hooks/localStorage"
import { data } from "../data/carousel.js"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

function TaskCarousel() {
  const [username, _] = useLocalStorage("username", null)
  const [user, setUser] = useState("")
  const [task, setTask] = useState([])

  const slideLeft = () => {
    const slider = document.getElementById("slider")
    slider.scrollLeft -= 700
  }

  const slideRight = () => {
    const slider = document.getElementById("slider")
    slider.scrollLeft += 700
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:5000/api/users/", {
          username,
          task,
        })
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].username === username) setUser(res.data[i].username)
          setTask(res.data[i].task)
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
    fetchData()
  }, [username])

  console.log(user, task)
  return (
    <>
      <div className="my-4 relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer
        hover:opacity-100"
          onClick={slideLeft}
          size={60}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll
          scrollbar-hide scroll whitespace-nowrap
          scroll-smooth">
          {task.map((item) => (
            <div className="w-[320px] inline-block p-2">
              <a href="/Task">
                <button className="p-0 bg-transparent">
                  <img
                    className="cursor-pointer hover:scale-105
                ease-in-out duration-100"
                    src={item.src}
                    alt="/"
                    draggable="false"
                  />
                  <h2 className="text-2xl text-white font-bold">{item.name}</h2>
                </button>
              </a>
            </div>
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer
        hover:opacity-100"
          onClick={slideRight}
          size={60}
        />
      </div>
    </>
  )
}

export default TaskCarousel
