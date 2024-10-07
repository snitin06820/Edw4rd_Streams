import React from "react";
import { useEffect, useState } from 'react';
import MovieCard from "../components/MovieCard";

const Home = ({ movies }) => {
  const [movieses, setMovieses] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const token = localStorage.getItem('token'); 

      try {
        const response = await fetch('http://127.0.0.1:8787/movies', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`  
          }
        });

        if (response.ok) {
          const data = await response.json();
          setMovieses(data.moviesData); 
        } else {
          console.error('Failed to fetch movies');
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 sm:gap-6">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            poster={movie.posterLink}
            watchNowLink={movie.watchNowLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
