import { useState } from "react";
import TopNav from "./TopNav";
import { Contents, Nav } from ".";
import classNames from "classnames";

const TwoColumnLayout = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="flex h-full text-gray-300 bg-zinc-900">
      <div
        className={classNames(
          { hidden: !showNav },
          "fixed w-[50vw] h-full top-0 left-0 bg-zinc-900 lg:static z-30 lg:w-1/6 border-r-2 border-gray-500/25 lg:block"
        )}
      >
        <Nav show={showNav} setShow={setShowNav} />
      </div>
      <div className="overflow-y-auto px-2 w-full lg:w-5/6 lg:px-9 ">
        <TopNav show={showNav} setShow={setShowNav} />
        <Contents />
      </div>
    </div>
  );
};

export default TwoColumnLayout;
