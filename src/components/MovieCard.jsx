import React from "react";

const MovieCard = ({ title, poster, watchNowLink }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg w-full sm:w-60 md:w-48 lg:w-64">
      <img
        src={poster}
        alt={title}
        className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <a href={watchNowLink}>
          <button className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md">
            Watch Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default MovieCard;