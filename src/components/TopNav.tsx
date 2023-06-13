import { Dispatch, SetStateAction, useState } from "react";
import { IoMdNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

type TopNavType = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const TopNav = ({ setShow, show }: TopNavType) => {
  const [active, setActive] = useState(false);

  const navigate = useNavigate();

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      const query = event.target.value;
      navigate(`/search/${query}`);
    }
  };

  return (
    <nav className="text-gray-300/50 py-6">
      <ul className="flex justify-between items-center">
        <div className="border-2 flex transition-all duration-700 items-center focus-within:w-[60%] focus-within:border-red-700/40 gap-2 h-10 px-4 rounded-full border-gray-300/50">
          <IoSearchOutline className="h-5 w-5" />
          <input
            className="appearance-none focus:placeholder:text-white/60 placeholder:text-gray-300/50 bg-transparent focus:outline-none focus-within:text-white/60 h-full"
            type="text"
            onKeyUp={handleKeyPress}
            placeholder="Search movies..."
          />
        </div>
        <HiMenuAlt3
          onClick={() => setShow(!show)}
          className="lg:hidden block h-8 w-8 text-white/60"
        />
        <div className="items-center space-x-3 hidden lg:flex">
          {!active && (
            <IoMdNotificationsOutline
              onClick={() => setActive((prev) => !prev)}
              className="h-7 w-7 cursor-pointer"
            />
          )}
          {active && (
            <IoMdNotifications
              onClick={() => setActive((prev) => !prev)}
              className="h-7 w-7 cursor-pointer text-red-700"
            />
          )}

          <div className="h-9 w-9 hidden lg:block rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/17045026/pexels-photo-17045026/free-photo-of-fashion-people-woman-relaxation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile"
            />
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default TopNav;
