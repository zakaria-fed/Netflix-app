import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./Requests";
import base_url from "./Row";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header>
      {/* Title */}
      {/* 2 Buttons */}
      {/* Description */}
    </header>
  );
}

export default Banner;
