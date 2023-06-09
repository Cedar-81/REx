import { Banner, MovieSectionList, WatchParty } from ".";

function Browse() {
  return (
    <div className="space-y-10">
      <Banner type="all" />
      <WatchParty />
      <MovieSectionList type="all" />
    </div>
  );
}

export default Browse;
