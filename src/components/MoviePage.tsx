import { useQuery } from "react-query";
import { MovieDetails, MovieMedia } from ".";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../utils";

function MoviePage() {
  let { type, id } = useParams();
  const { data, isLoading, isError } = useQuery(
    ["movie", id],
    () => getMovieDetails(id, type),
    {
      enabled: id?.trim() !== "",
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching movie details</div>;
  }

  return (
    <section className="space-y-16">
      <MovieMedia
        movieId={id}
        type={type}
        imagePath={data.backdrop_path ? data.backdrop_path : data.poster_path}
      />
      <MovieDetails movieId={id} type={type} />
    </section>
  );
}

export default MoviePage;
