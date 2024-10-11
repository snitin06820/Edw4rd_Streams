import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar"; // Import Navbar to pass the function

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // Add this for search results
  const [query, setQuery] = useState(""); // Manage query

  useEffect(() => {
    // Fetch movies once and pass it down
    const fetchMovies = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://127.0.0.1:8787/movies', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setMovies(data.moviesData);
        } else {
          console.error('Failed to fetch movies');
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  // Handle search logic
  const handleSearch = (query) => {
    setQuery(query);
    if (query.trim()) {
      const filteredResults = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]); // Reset if no query
    }
  };

  // If there are search results, show them, otherwise show all movies
  const moviesToDisplay = searchResults.length > 0 ? searchResults : movies;

  return (
    <div >
      <Navbar handleSearch={handleSearch} /> {/* Pass handleSearch to Navbar */}
      <div className="p-4 sm:p-6 lg:p-8 pt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-4 sm:gap-6">
        {moviesToDisplay.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            poster={movie.posterLink}
            watchNowLink={movie.watchNowLink}
          />
        ))}
      </div>
      {searchResults.length === 0 && query && <p className="text-gray-400 mt-4">No results found.</p>}
    </div>
  );
};

export default Home;
