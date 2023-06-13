import { Section, nav_list } from "../utils";
import { NavItem } from ".";
import { Dispatch, SetStateAction, useState } from "react";
import { IoClose } from "react-icons/io5";

type NavType = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const Nav = ({ show, setShow }: NavType) => {
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
    <nav className="lg:w-full h-full space-y-10">
      <div className="flex justify-between items-center pl-9 pr-4 pt-8">
        <p className="font-bold text-xl text-red-700">REx</p>
        <IoClose
          onClick={() => setShow(!show)}
          className="lg:hidden h-5 w-5 !text-white hover:text-red-700"
        />
      </div>
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
                  show={show}
                  setShow={setShow}
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
                  show={show}
                  setShow={setShow}
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
                  show={show}
                  setShow={setShow}
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
