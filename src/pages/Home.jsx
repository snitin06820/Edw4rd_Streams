import React from "react";
import MovieCard from "../components/MovieCard";

const Home = ({ movies }) => {
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
