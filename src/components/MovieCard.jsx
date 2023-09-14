import React from "react";
const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="sm:w-full sm:items-center md:w-1/2 lg:w-1/5 p-4">
      <div
        className="bg-white shadow-md rounded-lg overflow-hidden"
        data-testid="movie-card"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 object-cover "
          data-testid="movie-poster"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold" data-testid="movie-title">
            {movie.title}
          </h2>
          <p className="text-sm" data-testid="movie-release-date">
            {movie.release_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
