import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useMovieStore from "../stores/useMovieStore";

const MovieDetails = () => {
  const { id } = useParams();
  const { selectedMovie, getMovieDetails, loading } = useMovieStore();

  useEffect(() => {
    getMovieDetails(id);
  }, [id, getMovieDetails]);

  if (loading) return <p>Loading details...</p>;
  if (!selectedMovie) return <p>No details available.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back</Link>
      <h2>{selectedMovie.Title}</h2>
      <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
      <p><strong>Year:</strong> {selectedMovie.Year}</p>
      <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
      <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
      <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
    </div>
  );
};

export default MovieDetails;
