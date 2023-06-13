import { useState } from "react";
import TopNav from "./TopNav";
import { Contents, Nav } from ".";
import classNames from "classnames";

const TwoColumnLayout = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="flex h-full text-gray-300 bg-zinc-900">
      <div
        className={classNames("w-1/6 border-r-2 border-gray-500/25", {
          hidden: !showNav,
        })}
      >
        <Nav show={showNav} setShow={setShowNav} />
      </div>
      <div className="overflow-y-auto px-2 w-full sm:hover:text-red-700 lg:w-5/6 lg:px-9 ">
        <TopNav show={showNav} setShow={setShowNav} />
        <Contents />
      </div>
    </div>
  );
};

export default TwoColumnLayout;
