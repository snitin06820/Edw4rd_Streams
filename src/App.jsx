import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import { AdminProvider } from "./context/AdminContext";
import Layout from "./components/Layout";
import  Signin  from "./pages/Signin";
import  Signup  from "./pages/Signup";

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
        <Layout>
          <Navbar />
          <Routes>
            <Route path="/signin" element={<Signin />} /> {/* Add Signin route */}
            <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
            <Route path="/" element={<Home movies={movies} />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route
              path="/admin-panel"
              element={<AdminPanel addMovie={addMovie} />}
            />
          </Routes>
        </Layout>
      </Router>
    </AdminProvider>
  );
}

export default App;
