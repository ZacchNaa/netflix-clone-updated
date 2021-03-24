import React, { useState, useEffect } from "react";
import "./Banner.css";
import axiosInstance from "../../axiosRequest/axios";
import requests from "../../axiosRequest/requests";

//base url for images
const base_url = process.env.REACT_APP_IMAGE_BASEURL;

const Banner = () => {
  //state setting
  const [movie, setMovie] = useState([]);

  //conditionals and side effects
  useEffect(() => {
    async function fetchData() {
      const request = await axiosInstance.get(requests.fetchNetflixOriginals);
      setMovie(
        //returning one random movie
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  //truncating the amount of description text displayed
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}{" "}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      {/* adding a nice fade */}
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
