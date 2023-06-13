import { Banner, MovieSectionList, WatchParty } from ".";

function Movies() {
  return (
    <div className="space-y-10">
      <Banner type="movie" />
      <WatchParty />
      <MovieSectionList type="movie" />
    </div>
  );
}

export default Movies;
