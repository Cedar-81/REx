import { BsFillPlayCircleFill } from "react-icons/bs";
import { Movie, getGenreNames } from "../utils";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

type BannerContentType = {
  data: Movie;
};

const BannerContent = ({ data }: BannerContentType) => {
  const { data: genres } = useQuery("genres", () => {});
  const movie_genres = getGenreNames(data.genre_ids, genres);
  let genre_string: string = movie_genres.map((genre) => `#${genre}`).join(" ");
  let title = data.name
    ? data.name
    : data.original_name
    ? data.original_name
    : data.title;

  return (
    <section className="overflow-hidden w-full h-[60vh] relative rounded-xl">
      <div className="px-8 absolute w-full z-20 space-y-4 lg:space-y-8 bottom-10 lg:bottom-20">
        <div className="space-y-2">
          <h1 className="text-3xl lg:text-5xl lg:w-[75%] font-semibold text-white">
            {title}
          </h1>
          <div className="flex lg:w-[50%]">
            <p className="lg:text-lg cursor-pointer font-semibold">
              {genre_string}
            </p>
          </div>
        </div>
        <div className="flex gap-6 font-semibold">
          <Link to={"/" + data.type + "/" + data.id + "/" + title}>
            <button className="rounded-full text-xs lg:text-base border-2 border-red-700 text-red-700 active:border-red-500 items-center px-8 py-2">
              More Details
            </button>
          </Link>
          <Link to={"/" + data.type + "/" + data.id + "/" + title}>
            <button className="rounded-full text-xs lg:text-base flex gap-2 items-center px-8 py-2 bg-red-700 active:bg-red-500 text-white">
              Watch
              <BsFillPlayCircleFill className="h-4 w-4 text-white" />
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute h-full w-full top-0 right-0 z-10 bg-gradient-to-b from-transparent via-black/50 to-black" />
      <img
        src={`https://image.tmdb.org/t/p/w500//${
          data.backdrop_path ? data.backdrop_path : data.poster_path
        }`}
        className="absolute inset-0 top-0 right-0 object-cover h-full w-full"
        alt=""
      />
    </section>
  );
};

export default BannerContent;
