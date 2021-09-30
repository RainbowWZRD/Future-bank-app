import React from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Hero from "./components/Hero"
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <Sidebar />
    <Navbar />
    <Hero />
    </Router>
  );
}

export default App;
