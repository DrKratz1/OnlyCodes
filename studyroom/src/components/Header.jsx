import React from "react"
import { Link } from "react-router-dom"
import "@fontsource/inter/600.css";
import '../styles/styles.css';
import AddTaskButton from "./AddTaskButton";

function Header() {
  return (
    <div>
    <nav>
      <Link to="/">
        <img src="/assets/logo.jpeg" alt="Logo" className="logo" />
      </Link>
      <h1 className ="quote text-white text-3xl font-semibold">"The only time success comes before work is in the dictionary"</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
    
    <div>
        <AddTaskButton />
    </div>
    </div>
  );
}

export default Header;
