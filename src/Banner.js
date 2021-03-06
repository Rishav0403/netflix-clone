import React, { useEffect, useState } from 'react';
import axiosInstance from './axios';
import requests from './requests';
import './Banner.css'

// const baseImgUrl = 'https://image.tmdb.org/t/p/original/';

const Banner = () => {

  const [movie, setMovie] = useState({});

  function truncate(str, n){
      return str.length;
  }
  console.log(truncate('abc', 5));

  useEffect(() => {
    const fetchData = async () => {
        const request = await axiosInstance.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random()*request.data.results.length - 1)
          ]
        );
        return request;
    }
    fetchData();
  },[]);
  console.log(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`);

  return (
    <header className='banner'
      style={{
        backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize:"cover",
        backgroundPosition:"center center"
      }}
    >
      <div className="banner__contents">
        <h1 className='banner__title'>
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
            {movie.overview}
        </h1>
      </div>

      <div className="banner--fadeBottom" />

    </header>
  );
}

export default Banner;