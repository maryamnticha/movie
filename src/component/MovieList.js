import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onAddMovie = () => {} }) => (
  <div className="movie-list">
    {movies.map((movie, key) => (
      <MovieCard className="Cards" movie={movie} key={key} />
    ))}
    <div
      className="addbtn"
      onClick={() => {
        onAddMovie({
          id: Date.now(),
          title: prompt("movie title: "),
          rating: Number(prompt("movie rating: ")),
          image: prompt("movie image: ")
        });
      }}
    >
      +
    </div>
  </div>
);

export default MovieList;
