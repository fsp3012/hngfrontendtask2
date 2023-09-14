// src/components/HomePage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import MovieCard from "./components/MovieCard";
import imdb from "./assets/IMDB.png";
import logo from "./assets/Logo.png";
import menu from "./assets/Menu.png";
import apple from "./assets/PngItem_1381056 1.png";
import search from "./assets/Search.png";
import icon from "./assets/Icon.png";
import twitter from "./assets/Vector (1).png";
import fb from "./assets/Vector (2).png";
import instagram from "./assets/Vector (3).png";
import youtube from "./assets/Vector.png";

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSearch = async () => {
    if (!query) {
      return;
    }
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: "9cf39a07eefe47791bb6effeaf5d0fe8",
            query: query,
          },
        }
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  useEffect(() => {
    async function fetchTopMovies() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated",
          {
            params: {
              api_key: "9cf39a07eefe47791bb6effeaf5d0fe8",
            },
          }
        );
        console.log(response.data.results);
        setTopMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top movies:", error);
        setLoading(false);
      }
    }
    fetchTopMovies();
  }, []);

  return (
    <div className="container mx-auto lg:py-0">
      <header className="john w-full px-8 py-5">
        <nav className="navbar md:flex items-center justify-between ">
          <div className="md:flex items-center gap-5">
            <img src={logo} alt="" />
            <h2 className="text-xl md:text-3xl text-white">MovieBox</h2>
          </div>
          <div className="relative flex items-center justify-between w-2/4">
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="What do you want to watch?"
              className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full bg-transparent text-white placeholder:text-white"
            />
            <img
              src={search}
              onClick={handleSearch}
              alt="Search Icon"
              className="absolute right-9"
            />
          </div>

          <div className="md:flex items-center gap-5 ">
            <p className="text-white text-3xl">Sign in</p>
            <img src={menu} alt="" />
          </div>
        </nav>
        <div className="text-white w-2/5">
          <h1 className="text-2xl md:text-5xl font-semibold leading-snug">
            John Wick 3: Parabellum
          </h1>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <img src={imdb} alt="" />
              <p>86.0/100</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={apple} alt="" />
              <p>97%</p>
            </div>
          </div>
          <p className="text-sm md:text-lg">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
        </div>
        <button className="hidden bg-pink-800 text-white px-4 py-2 rounded md:flex items-center gap-3 my-5">
          <img src={icon} alt="" />
          <p>Watch Trailer</p>
        </button>
      </header>
      <h1 className="text-3xl font-semibold mb-4 px-11 py-5">Top 10 Movies</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mobile flex flex-wrap px-8" data-testid="movie-list">
          {searchResults.length > 0
            ? searchResults
                .slice(0, 10)
                .map((movie) => <MovieCard key={movie.id} movie={movie} />)
            : topMovies
                .slice(0, 10)
                .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      )}
      <footer className="flex flex-col items-center py-8">
        <div className="flex items-center gap-5">
          <img src={twitter} alt="" />
          <img src={fb} alt="" />
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
        </div>
        <div className="flex flex-col md:flex md:flex-row items-center gap-5 py-5">
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
        <p>© 2023 MovieBox by Fakorede Olamide</p>
      </footer>
    </div>
  );
};

export default HomePage;
