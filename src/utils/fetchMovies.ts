import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getMovieDetails = async (
  id: string | undefined,
  type: string | undefined
) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovieTrailers = async (
  id: string | undefined,
  type: string | undefined
) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchMovies = async (datatype: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/${datatype}?api_key=${API_KEY}`
  );
  let movies = response.data.results.map((movie: any) => {
    return { ...movie, type: datatype.split("/")[0] };
  });
  return movies;
};

export const fetchGenres = async (type: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}`
  );
  return response.data.genres;
};

// Get sorted latest tvseries and movies
export const getLatestTVSeriesAndMovies = async () => {
  const latestTVSeries = await fetchMovies("tv/popular");
  const latestMovies = await fetchMovies("movie/popular");

  // Combine the TV series and movies arrays
  const latestTVSeriesAndMovies = [...latestTVSeries, ...latestMovies];

  // Sort the combined array based on release date in descending order
  latestTVSeriesAndMovies.sort((a, b) => {
    const dateA = new Date(a.release_date || a.first_air_date);
    const dateB = new Date(b.release_date || b.first_air_date);
    return dateB.getTime() - dateA.getTime();
  });

  // Process the data as per your requirements
  return latestTVSeriesAndMovies;
};

export const getGenreNames = (genreIds: Array<number>, genres: any) => {
  if (!genres) {
    return [];
  }
  return genreIds.map((genreId) => {
    const genre = genres.find((genre: any) => genre.id === genreId);
    return genre ? genre.name : "";
  });
};

export const searchMovies = async (query: string | undefined) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/multi",
    {
      params: {
        api_key: `${API_KEY}`,
        query: query,
      },
    }
  );

  return response.data.results;
};
