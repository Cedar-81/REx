import { useQuery } from "react-query";
import { getMovieTrailers } from "../utils";

type MovieMediaType = {
  movieId: string | undefined;
  imagePath: string | undefined;
  type: string | undefined;
};

const MovieMedia = ({ movieId, imagePath, type }: MovieMediaType) => {
  const { data, isLoading, isError } = useQuery(
    ["movieTrailers", movieId],
    () => getMovieTrailers(movieId, type)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching movie trailers</div>;
  }

  const trailer = data.find((video: any) => video.type === "Trailer");

  const videoUrl = trailer && `https://www.youtube.com/embed/${trailer.key}`;

  return (
    <div className="w-full h-[70vh] overflow-hidden relative rounded-2xl">
      {trailer ? (
        <iframe
          className="h-full w-full"
          src={videoUrl}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/w500//${imagePath}`}
          alt="Movie Poster"
        />
      )}
    </div>
  );
};

export default MovieMedia;
