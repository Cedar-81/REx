import { useQuery } from "react-query";
import { Movie, fetchGenres, getGenreNames } from "../utils";
import { Link } from "react-router-dom";

type MovieCardType = {
  data: Movie;
  type: string;
};

function MovieCard({ data, type }: MovieCardType) {
  const { data: genres } = useQuery("genres", () => fetchGenres(type));
  const movie_genres = getGenreNames(data.genre_ids, genres);
  const title = data.title
    ? data.title
    : data.name
    ? data.name
    : data.original_name;

  return (
    <Link to={"/" + type + "/" + data.id + "/" + title}>
      <div className="overflow-hidden h-[15rem] w-[12rem] relative rounded-xl cursor-pointer hover:border hover:border-red-700/30 border border-transparent transition-all">
        <div className="px-1 w-full z-20 absolute bottom-4 ">
          <div className="rounded-xl p-2 space-y-2 bg-black/50 filter backdrop-blur-md">
            <h3 className="text-white font-semibold">
              {title.length > 17 ? title.slice(0, 17) + "..." : title}
            </h3>
            <div className="flex space-x-2 items-center">
              <p className="text-sm">
                {data.release_date
                  ? data.release_date?.split("-")[0]
                  : data.first_air_date?.split("-")[0]}
              </p>
              <div className="h-2 w-2 rounded-full bg-black" />
              <p className="text-sm">{movie_genres[0]}</p>
            </div>
          </div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500//${
            data.poster_path ? data.poster_path : data.backdrop_path
          }`}
          className="absolute inset-0 top-0 right-0 object-cover h-full w-full"
          alt={data.title}
        />
      </div>
    </Link>
  );
}

export default MovieCard;
