import { Movie } from "../utils";

type MovieCardType = {
  data: Movie;
};

function MovieCard({ data }: MovieCardType) {
  return (
    <div className="overflow-hidden h-[15rem] w-[12rem] relative rounded-xl cursor-pointer hover:border hover:border-red-700/30 border border-transparent transition-all">
      <div className="px-1 w-full z-20 absolute bottom-4 ">
        <div className="rounded-xl p-2 space-y-2 bg-black/50 filter backdrop-blur-md">
          <h3 className="text-white font-semibold">{data.title}</h3>
          <div className="flex space-x-2 items-center">
            <p className="text-sm">2023</p>
            <div className="h-2 w-2 rounded-full bg-black" />
            <p className="text-sm">Action</p>
          </div>
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500//${data.poster_path}`}
        className="absolute inset-0 top-0 right-0 object-cover h-full w-full"
        alt={data.title}
      />
    </div>
  );
}

export default MovieCard;
