import React, { useState } from "react";
import useMovieStore from "../stores/useMovieStore";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const searchMovies = useMovieStore((state) => state.searchMovies);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      searchMovies(query, 1);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "70%" }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
