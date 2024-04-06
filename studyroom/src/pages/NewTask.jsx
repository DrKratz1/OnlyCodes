import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stopwatch from "../components/Stopwatch";
import FinishTaskButton from "../components/FinishTaskButton";
import NotesSection from "../components/NotesSection";

function NewTask() {
  return (
    <div>
      <Header title="Task 1" />
      <div className="Container">
        <Stopwatch />
        <div className="NotesContainer">
          <NotesSection />
          <FinishTaskButton />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewTask;
