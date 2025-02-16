import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NamePlate from "./components/NamePlate";
import AboutMe from "./components/AboutMe";
import PersonalProjects from "./components/PersonalProjects";
import Experiences from "./components/Experiences";
function App() {
  return (
    <>
      <NavBar />
      <div className="homePage">
        <NamePlate />
        <div className="intro">
          <AboutMe />
        </div>
        <PersonalProjects />
        <Experiences />
      </div>
    </>
  );
}

export default App;
