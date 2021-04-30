import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
 
export const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((film) => (
          <img
            className={`${isLargeRow ? "row__posterLarge" : "row__poster"}`}
            src={`${base_url}${isLargeRow ? film.poster_path :film.backdrop_path}`}
            alt={film.name}
            key={film.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
