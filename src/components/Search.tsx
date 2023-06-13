import { useQuery } from "react-query";
import { MovieCard } from ".";
import { searchMovies } from "../utils";
import { useParams } from "react-router-dom";

export default function Search() {
  let { query } = useParams();

  const { data, isLoading, isError } = useQuery(
    ["searchall", query],
    () => searchMovies(query),
    {
      enabled: query?.trim() !== "",
    }
  );

  if (isLoading) {
    return <section>Loading...</section>;
  }

  if (isError) {
    return <section>Error occurred while fetching movies</section>;
  }

  return (
    <section className="space-y-6">
      <h3 className="text-xl text-white text-semibold">
        Search Results For: {query?.toLocaleUpperCase()}
      </h3>
      <div className="flex justify-between gap-y-6 gap-x-2 flex-wrap">
        {data.map((movie: any) => {
          if (movie.media_type == "movie" || movie.media_type == "tv") {
            return (
              <MovieCard type={movie.media_type} key={movie.id} data={movie} />
            );
          }
        })}
      </div>
    </section>
  );
}
