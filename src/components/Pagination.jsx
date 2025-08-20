import React from "react";
import useMovieStore from "../stores/useMovieStore";

const Pagination = ({ currentPage, setCurrentPage }) => {
  const { totalResults } = useMovieStore();
  const totalPages = Math.ceil(totalResults / 10);

  if (totalPages <= 1) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span style={{ margin: "0 10px" }}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
