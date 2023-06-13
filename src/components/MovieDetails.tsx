import { useQuery } from "react-query";
import { getMovieDetails } from "../utils";

type MovieDetailsType = {
  movieId: string | undefined;
  type: string | undefined;
};

function MovieDetails({ movieId, type }: MovieDetailsType) {
  const { data, isLoading, isError } = useQuery(["movie", movieId], () =>
    getMovieDetails(movieId, type)
  );

  let genre_string: string = data.genres
    .map((genre: any) => `#${genre.name}`)
    .join(" ");

  const date = new Date(data.release_date);
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching movie details</div>;
  }
  return (
    <section className="space-y-4 pb-10 lg:w-[70%] text-white text-left lg:mx-auto">
      <div className="space-y-1">
        <a href={data.homepage} className="" target="_blank">
          <h1 className="text-2xl font-bold text-white w-full">
            {data.original_title.trim()}
          </h1>
        </a>
        {data.tagline && (
          <h2 className="text-lg font-semibold">{data.tagline}</h2>
        )}
      </div>
      <p className=" text-lg font-light">{data.overview}</p>
      <p className="font-semibold text-lg">
        Genres:{" "}
        <span className="text-gray-300 text-base font-light">
          {genre_string}
        </span>
      </p>
      <p className="font-semibold">
        Status:{" "}
        <span className="text-gray-300 text-base font-light">
          {data.status}
        </span>
      </p>
      <p className="font-semibold">
        Main Language:{" "}
        <span className="text-gray-300 text-base font-light uppercase">
          {data.original_language}
        </span>
      </p>
      <p className="font-semibold">
        Release Date:{" "}
        <span className="text-gray-300 text-base font-light">
          {formattedDate}
        </span>
      </p>
    </section>
  );
}

export default MovieDetails;
