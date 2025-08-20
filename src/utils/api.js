import axios from "axios";

const API_KEY = "6c5fd018"; // your key
const BASE_URL = "http://www.omdbapi.com/";

export const fetchMovies = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: query,
        page,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { Search: [], totalResults: 0 };
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        i: id,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return {};
  }
};
