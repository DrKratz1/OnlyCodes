import React, { useState, useEffect } from "react"
import "../styles/Stopwatch.css" // Ensure correct path to Stopwatch.css
import axios from "axios"
import { useLocalStorage } from "../hooks/localStorage"

function Stopwatch() {
  const [milliseconds, setMilliseconds] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval
    if (isActive) {
      interval = setInterval(() => {
        setMilliseconds((prev) => prev + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive])

  useEffect(() => {
    if (milliseconds === 1000) {
      setMilliseconds(0)
      setSeconds((prev) => prev + 1)
    }
    if (seconds === 60) {
      setSeconds(0)
      setMinutes((prev) => prev + 1)
    }
    if (minutes === 60) {
      setMinutes(0)
      setHours((prev) => prev + 1)
    }
  }, [milliseconds, seconds, minutes])

  const handleStart = () => {
    setIsActive(true)
  }

  const handlePause = () => {
    setIsActive(false)
  }

  return (
    <div className="container">
      <div className="timer-display">
        {`${String(hours).padStart(2, "0")} : ${String(minutes).padStart(
          2,
          "0"
        )} : ${String(seconds).padStart(2, "0")} : ${String(
          milliseconds
        ).padStart(3, "0")}`}
      </div>
      <div className="buttons">
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStart}>Start</button>
      </div>
    </div>
  )
}

export default Stopwatch
