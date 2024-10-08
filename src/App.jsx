import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import { AdminProvider } from "./context/AdminContext";
import Layout from "./components/Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
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
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/movies" element={<Home />} />
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
