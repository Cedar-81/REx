import React, { ReactNode } from "react";
import TopNav from "./TopNav";

type LayoutProps = {
  nav: ReactNode;
  mainContent: ReactNode;
};

const TwoColumnLayout: React.FC<LayoutProps> = ({ nav, mainContent }) => {
  return (
    <div className="flex h-full text-gray-300 bg-zinc-900">
      <div className="w-1/6 border-r-2 border-gray-500/25">{nav}</div>
      <div className="w-5/6 px-9 overflow-y-auto">
        <TopNav />
        {mainContent}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
