import { WPartyCard } from ".";

function WatchParty() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl text-white text-semibold">Parties</h2>
      <div className="flex space-x-6">
        <WPartyCard />
        <WPartyCard />
        <WPartyCard />
      </div>
    </section>
  );
}

export default WatchParty;
