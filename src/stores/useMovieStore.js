import { create } from "zustand";
import { fetchMovies, fetchMovieDetails } from "../utils/api";

const useMovieStore = create((set) => ({
  movies: [],
  selectedMovie: null,
  totalResults: 0,
  loading: false,

  searchMovies: async (query, page = 1) => {
    set({ loading: true });
    const data = await fetchMovies(query, page);
    set({
      movies: data.Search || [],
      totalResults: parseInt(data.totalResults) || 0,
      loading: false,
    });
  },

  getMovieDetails: async (id) => {
    set({ loading: true });
    const data = await fetchMovieDetails(id);
    set({ selectedMovie: data, loading: false });
  },

  clearSelectedMovie: () => set({ selectedMovie: null }),
}));

export default useMovieStore;
