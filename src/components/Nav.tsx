import { Section, nav_list } from "../utils";
import { NavItem } from ".";
import { useState } from "react";

const Nav = () => {
  const [navList, setNavList] = useState(nav_list);

  const handleActive = (itemIndex: number) => {
    const updatedList = navList.map((item, index) => {
      if (index == itemIndex) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });

    setNavList(updatedList);
  };

  return (
    <nav className="w-full h-full space-y-10">
      <p className="font-bold text-xl text-red-700 px-9 pt-8">REx</p>
      <section className="space-y-4">
        <p className="text-sm pl-9">YOUR FEED</p>
        {navList.map((item, index) => {
          if (item.section == Section.FEED) {
            return (
              <ul key={index} className="space-y-4">
                <NavItem
                  handleActive={handleActive}
                  index={index}
                  content={item}
                />
              </ul>
            );
          }
        })}
      </section>
      <section className="space-y-4">
        <p className="text-sm pl-9">SOCIALS</p>
        {navList.map((item, index) => {
          if (item.section == Section.SOCIALS) {
            return (
              <ul key={index} className="space-y-4">
                <NavItem
                  handleActive={handleActive}
                  content={item}
                  index={index}
                />
              </ul>
            );
          }
        })}
      </section>
      <div className="border-b-2 border-gray-100/10 mx-8" />
      <section className="space-y-4">
        <p className="text-sm pl-9">SETTINGS</p>
        {navList.map((item, index) => {
          if (item.section == Section.PROFILE) {
            return (
              <ul key={index} className="space-y-4">
                <NavItem
                  handleActive={handleActive}
                  content={item}
                  index={index}
                />
              </ul>
            );
          }
        })}
      </section>
    </nav>
  );
};

export default Nav;
