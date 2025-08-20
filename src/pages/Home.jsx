import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";
import useMovieStore from "../stores/useMovieStore";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { searchMovies } = useMovieStore();

  useEffect(() => {
    searchMovies("Avengers", currentPage); // Default search on load
  }, [currentPage, searchMovies]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movie Database</h1>
      <SearchBar />
      <MovieGrid />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
