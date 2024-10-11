import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import { AdminProvider } from "./context/AdminContext";
import Layout from "./components/Layout";
import  Signin  from "./pages/Signin";
import  Signup  from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import SearchBar from "./components/SearchBar";

function App() {
  const [movies, setMovies] = useState([]);
  const addMovie = (newMovie) => {
    console.log(newMovie);
    console.log(movies);
    setMovies([newMovie, ...movies]);
  };
  

  return (
    <AdminProvider>
      <Router>
        <Layout> 
          <Routes>
          <Route 
          path="/" 
          element={<ProtectedRoute><Home /></ProtectedRoute>} 
        />
            <Route path="/signin" element={<Signin />} /> 
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/movies" element={<Home movies={movies}  />} />
          </Routes>
        </Layout>
      </Router>
    </AdminProvider>
  );
}

export default App;
