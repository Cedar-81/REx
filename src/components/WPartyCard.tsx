function WPartyCard() {
  return (
    <div className="w-[15rem] cursor-pointer p-4 space-y-4 bg-zinc-800 hover:border hover:border-red-900/25 border border-transparent transition-all rounded-2xl">
      <div className="flex justify-between items-baseline">
        <div className="overflow-hidden w-14 h-8 relative rounded-md">
          <img
            src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="absolute inset-0 top-0 right-0 object-cover h-full w-full"
            alt=""
          />
        </div>
        <div className="flex space-x-2 items-center">
          <div className="flex items-center -space-x-4 text-xs">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/16952093/pexels-photo-16952093/free-photo-of-young-woman-in-a-hat-against-a-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Avatar 1"
                className="w-6 h-6 rounded-full"
              />
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/16952093/pexels-photo-16952093/free-photo-of-young-woman-in-a-hat-against-a-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Avatar 2"
                className="w-6 h-6 rounded-full"
              />
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/16952093/pexels-photo-16952093/free-photo-of-young-woman-in-a-hat-against-a-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Avatar 3"
                className="w-6 h-6 rounded-full"
              />
            </div>
          </div>
          <span className="text-sm font-semibold">1.4k</span>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-white">The Soul Conductor</p>
        <div className="flex space-x-3 text-xs">
          <p className="">#Horror</p>
          <p className="">#Fiction</p>
          <p className="">#Fantasy</p>
        </div>
      </div>
    </div>
  );
}

export default WPartyCard;
