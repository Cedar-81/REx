import { MovieSection } from ".";
import { browseSections } from "../utils";

type MovieSectionType = {
  type: string;
};

function MovieSectionList({ type }: MovieSectionType) {
  const browseSectionsMod =
    type == "all"
      ? browseSections
      : type == "movie"
      ? browseSections.slice(0, 3)
      : browseSections.slice(3, 5);
  return (
    <>
      {browseSectionsMod.map((item, index) => (
        <MovieSection key={index} sectionTitle={item} />
      ))}
    </>
  );
}

export default MovieSectionList;
