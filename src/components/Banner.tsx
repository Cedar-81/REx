import { BsFillPlayCircleFill } from "react-icons/bs";

const Banner = () => {
  return (
    <section className="overflow-hidden w-full h-[40vh] relative rounded-xl">
      <div className="px-8 absolute w-full z-20 space-y-8 bottom-8">
        <div className="space-y-2">
          <h1 className="text-5xl w-[75%] font-semibold">The Soul Conductor</h1>
          <div className="flex w-[50%]">
            <p className="text-sm cursor-pointer text-red-700">#Horror</p>
          </div>
        </div>
        <div className="flex gap-6 font-semibold">
          <button className="rounded-full border-2 border-red-700 text-red-700 active:border-red-500 items-center px-8 py-2">
            More Details
          </button>
          <button className="rounded-full flex gap-2 items-center px-8 py-2 bg-red-700 active:bg-red-500 text-white">
            Watch
            <BsFillPlayCircleFill className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
      <div className="absolute h-full w-full top-0 right-0 z-10 bg-gradient-to-b from-transparent via-black/50 to-black" />
      <img
        src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="absolute inset-0 top-0 right-0 object-cover h-full w-full"
        alt=""
      />
    </section>
  );
};

export default Banner;
