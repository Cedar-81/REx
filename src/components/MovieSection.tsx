import { useQuery } from "react-query";
import { fetchMovies } from "../utils";
import { MovieCard, SliderWrapper } from ".";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type MovieSectionType = {
  sectionTitle: string;
};

function MovieSection({ sectionTitle }: MovieSectionType) {
  let type = sectionTitle.toLocaleLowerCase().includes("series")
    ? "tv"
    : "movie";
  let filter = sectionTitle
    .replace("Movies", "")
    .replace("Series", "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");

  const { data, isLoading, isError } = useQuery(filter, () =>
    fetchMovies(`${type}/${filter}`)
  );

  if (isLoading) {
    return <section>Loading...</section>;
  }

  if (isError) {
    return <section>Error occurred while fetching movies</section>;
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl text-white text-semibold">{sectionTitle}</h2>
      {/* <MovieCard /> */}
      <div className="flex justify-between">
        <SliderWrapper>
          {data.map((movie: any) => (
            <MovieCard type={type} key={movie.id} data={movie} />
          ))}
        </SliderWrapper>
      </div>
    </section>
  );
}

export default MovieSection;
