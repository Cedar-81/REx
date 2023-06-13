import { Banner, MovieSectionList, WatchParty } from ".";

function Shows() {
  return (
    <div className="space-y-10">
      <Banner type="show" />
      <WatchParty />
      <MovieSectionList type="show" />
    </div>
  );
}

export default Shows;
