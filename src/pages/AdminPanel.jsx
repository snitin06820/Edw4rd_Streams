import React, { useState } from "react";
import { useAdmin } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const AdminPanel = ({ addMovie }) => {
  const [jsonInput, setJsonInput] = useState("");
  const { isAdmin, logout } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const movieData = JSON.parse(jsonInput);
      addMovie(movieData);
      alert("Movie added successfully");
      setJsonInput("");
    } catch (error) {
      alert("Invalid JSON format");
    }
  };

  if (!isAdmin) {
    navigate("/admin-login");
    return null;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Admin Panel</h2>
      <button
        onClick={logout}
        className="bg-red-600 px-4 py-2 rounded-md text-white mb-4"
      >
        Logout
      </button>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='{"posterLink": "posterlink", "watchNowLink": "watchlink"}'
          className="w-full h-40 p-2 mb-4 border"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white"
        >
          Submit
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        Please ensure the poster is 200x300 pixels and provide a valid streaming
        link.
      </p>
    </div>
  );
};

export default AdminPanel;
