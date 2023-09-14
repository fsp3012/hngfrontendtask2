import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams to access route parameters
import home from "../assets/Home.png";
import list from "../assets/List.png";
import logo from "../assets/Logo.png";
import logout from "../assets/Logout.png";
import calendar from "../assets/Calendar.png";
import tv from "../assets/TV Show.png";
import ticket from "../assets/Two Tickets.png";
import StarImage from "../starImage";
import rectangle from "../assets/Rectangle 37.png";
import arrow from "../assets/Expand Arrow.png";
import menu from "../assets/Menu.png";

const MovieDetails = () => {
  const { id } = useParams(); // Use useParams to get the 'id' parameter

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=9cf39a07eefe47791bb6effeaf5d0fe8`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  function formatDateToUTC(dateString) {
    const options = {
      timeZone: "UTC",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(dateString).getTime(options);
  }
  return (
    <div className=" flex flex-col md:flex md:flex-row items-center gap-4 ">
      <nav className=" lg:w-2/6 xl:w-1/6 border border-gray-500 border-r-1 rounded-tr-3xl rounded-br-3xl ps-5">
        <img className="close lg:hidden md:hidden" src={menu} alt="" />
        <div className="flex items-center gap-3 pt-5">
          <img src={logo} className="w-10" alt="" />
          <h2 className="text-xl">MovieBox</h2>
        </div>
        <div className="flex flex-col gap-7 py-8 ps-2">
          <div className="flex items-center gap-3  hover:bg-pink-300 hover:border-pink-800 border-r-4 hover:py-4">
            <img src={home} alt="" />
            <h2>Home</h2>
          </div>
          <div className="flex items-center gap-3  hover:bg-pink-300 hover:border-pink-800 border-r-4 hover:py-4 ">
            <img src={tv} alt="" />
            <h2>Movies</h2>
          </div>
          <div className="flex items-center gap-3  hover:bg-pink-300 hover:border-pink-800 border-r-4 hover:py-4 ">
            <img src={tv} alt="" />
            <h2>TV Series</h2>
          </div>
          <div className="flex items-center gap-3  hover:bg-pink-300 hover:border-pink-800 border-r-4 hover:py-4 ">
            <img src={calendar} alt="" />
            <h2>Upcoming</h2>
          </div>
          <div className="border border-pink-600 bg-pink-100 rounded-lg w-40 py-7 px-4 me-4">
            <h2 className="text-xl">Play movie quizes and earn free tickets</h2>
            <p>50k people are now playing</p>
            <button className="bg-pink-300 rounded-xl px-2">
              Start playing
            </button>
          </div>
          <div className="flex items-center gap-3  hover:bg-pink-300 hover:border-pink-800 border-r-4 hover:py-4 ">
            <img src={logout} alt="" />
            <h2>Logout</h2>
          </div>
        </div>
      </nav>
      <div className="p-8">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-80 object-cover items-center rounded-xl"
          data-testid="movie-poster"
        />
        <div className="flex flex-col md:flex md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex md:flex-row items-center gap-2 py-5">
            <h1 className="text-xl font-semibold" data-testid="movie-title">
              {movie.title}
            </h1>
            <p
              className="text-xl font-semibold"
              data-testid="movie-release-date"
            >
              {formatDateToUTC(movie.release_date)}
            </p>
            <p className="text-xl font-semibold " data-testid="movie-runtime">
              {movie.runtime}
            </p>
            <div className="flex items-center gap-3">
              <p className="border border-pink-600 rounded-xl text-pink-700 px-3 ">
                {movie.genres[0].name}
              </p>
              <p className="border border-pink-600 rounded-xl text-pink-700 px-3">
                {movie.genres[1].name}
              </p>
            </div>
          </div>
          <div className="py-5 md:py-0 flex items-center gap-3">
            <StarImage />
            <p>{movie.vote_average} | 350K</p>
          </div>
        </div>
        {console.log(movie)}
        <div className="flex flex-col md:flex md:flex-row items-center justify-between md:gap-5">
          <div className="flex flex-col gap-6 w-full md:w-3/6">
            <p data-testid="movie-overview">{movie.overview}</p>
            <p>
              Director: <span className="text-pink-700">Joseph Kosinki</span>
            </p>
            <p>
              Writers:{" "}
              <span className="text-pink-700">
                Jim Cash, Jack Epps Jr, Peter Craig
              </span>
            </p>
            <p>
              Stars:{" "}
              <span className="text-pink-700">
                Tom Cruise, Jennifer Connelly, Miles Teller
              </span>
            </p>
            <div className="flex items-center border border-gray-500 rounded-lg ">
              <button className="bg-pink-800 text-white text-sm py-6 md:px-0 md:py-3 md:ps-4 w-full rounded-lg">
                Top rated movie #65
              </button>
              <button className="bg-transparent text-black  py-2 ps-2 w-full rounded-lg flex items-center gap-8 md:gap-10">
                <p>Awards 9 nominations</p>
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>
          <div className="w-full md:w-3/6 lg:w-2/6 items-end">
            <button className="bg-pink-800 text-white px-20 md:px-8 lg:px-20 py-2 w-full rounded-lg flex items-center gap-3 my-5">
              <img src={ticket} alt="" />
              <p>See ShowTimes</p>
            </button>
            <button className="bg-pink-200 text-white px-16 md:px-5 lg:px-16 py-2 w-full rounded-lg flex items-center gap-3 my-5">
              <img src={list} alt="" />
              <p>More watch options</p>
            </button>
            <img src={rectangle} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
