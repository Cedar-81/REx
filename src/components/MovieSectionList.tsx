import { MovieSection } from ".";
import { browseSections } from "../utils";

function MovieSectionList() {
  return (
    <>
      {browseSections.map((item, index) => (
        <MovieSection key={index} sectionTitle={item} />
      ))}
    </>
  );
}

export default MovieSectionList;
