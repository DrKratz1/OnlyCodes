import React from "react"
import { data } from "../data/carousel.js"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

function TaskCarousel() {
  const slideLeft = () => {
    const slider = document.getElementById("slider")
    slider.scrollLeft -= 700
  }

  const slideRight = () => {
    const slider = document.getElementById("slider")
    slider.scrollLeft += 700
  }

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
          {data.map((item) => (
            <div className="w-[320px] inline-block p-2">
              <a href="/Task">
                <button className="p-0 bg-transparent">
                  <img
                    className="cursor-pointer hover:scale-105
                ease-in-out duration-100"
                    src={item.img}
                    alt="/"
                    draggable="false"
                  />
                  <h2 className="text-2xl text-white font-bold">{item.id}</h2>
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
