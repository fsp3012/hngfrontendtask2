import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
