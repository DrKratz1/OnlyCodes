import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stopwatch from "../components/Stopwatch";
import FinishTaskButton from "../components/FinishTaskButton";
import NotesSection from "../components/NotesSection";

function Task() {
  return (
    <div>
      <Header title="Task 1" />
      <div className="Container">
        <Stopwatch />
<<<<<<< HEAD:studyroom/src/pages/NewTask.jsx
        <div className="NotesContainer">
          <NotesSection />
          <FinishTaskButton />
        </div>
=======
      </h1>
      <div>
        <NotesSection />
      </div>
      <FinishTaskButton />

      <div>
        <Footer />
>>>>>>> 10379491c576715a6babcc980af477c62e12cf18:studyroom/src/pages/Task.jsx
      </div>
      <Footer />
    </div>
  );
}

<<<<<<< HEAD:studyroom/src/pages/NewTask.jsx
export default NewTask;
=======
export default Task
>>>>>>> 10379491c576715a6babcc980af477c62e12cf18:studyroom/src/pages/Task.jsx
