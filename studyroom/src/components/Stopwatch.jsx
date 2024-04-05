import React from "react"
import { Link } from "react-router-dom"
import '../styles/Stopwatch.css';

function Stopwatch() {
  return (
    <div class="container">
        <div class="timer-display">00:00:00:000</div>
        <div class="buttons">
            <button id = "pause-timer">Pause</button>
            <button id="start-timer">Start</button>
        </div>
    </div>
  );
}

export default Stopwatch;