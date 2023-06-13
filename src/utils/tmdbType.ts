interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  name: string;
  original_name: string;
  backdrop_path: string;
  first_air_date: string;
  type: string;
  genre_ids: Array<number>;
  // Add more properties as per the response structure
}

export default Movie;
