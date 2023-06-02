import axios from "axios";

export const fetchMovies = async (datatype: string) => {
  const API_KEY = "8216d4598535ab8ef01a9b6e03c2a59a";
  const response = await axios.get(
    `https://api.themoviedb.org/3/${datatype}?api_key=${API_KEY}`
  );
  return response.data.results;
};
