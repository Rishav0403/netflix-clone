import movieTrailer from 'movie-trailer';
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axiosInstance from './axios';
import './Row.css';

const baseImgUrl = 'https://image.tmdb.org/t/p/original/';


const Row = ({title, fetchUrl, id, isLargeRow}) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('');
    }
    else{
      movieTrailer(movie.name || "")
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error) => console.log(error));
    }
  }; 

  useEffect(() => {
    const fetchData = async () => {
      // console.log(fetchUrl);
      const request = await axiosInstance.get(fetchUrl);
    //   console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  },[fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='row' key={id}>
      <h2>{title}</h2>
      <div className="row__posters">
          {
            movies.map((movie, index) => {
              if(movie.backdrop_path!==null){
                return(
                  <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && 'row__posterLarge'}`} 
                    src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
                    alt={movie.original_name}
                  />
                );
              }
              return (<></>);
            }
          )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row