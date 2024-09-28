import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import { AdminProvider } from "./context/AdminContext";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      posterLink: "https://lookimg.com/images/2024/09/28/QWSxGj.md.jpeg",
      watchNowLink: "#",
    },
    {
      title: "Interstellar",
      posterLink: "https://lookimg.com/images/2024/09/28/QWSzEo.md.jpeg",
      watchNowLink: "#",
    },
  ]);
  const addMovie = (newMovie) => {
    console.log(newMovie);
    console.log(movies);
    setMovies([newMovie, ...movies]);
  };

  return (
    <AdminProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin-panel"
            element={<AdminPanel addMovie={addMovie} />}
          />
        </Routes>
      </Router>
    </AdminProvider>
  );
}

export default App;
