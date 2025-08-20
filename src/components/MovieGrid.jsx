import React from "react";
import { Link } from "react-router-dom";
import useMovieStore from "../stores/useMovieStore";

const MovieGrid = () => {
  const { movies, loading } = useMovieStore();

  if (loading) return <p>Loading...</p>;
  if (!movies.length) return <p>No movies found. Try searching above.</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
      {movies.map((movie) => (
        <div key={movie.imdbID} style={{ border: "1px solid #ddd", padding: "10px" }}>
          <img src={movie.Poster} alt={movie.Title} style={{ width: "100%" }} />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
