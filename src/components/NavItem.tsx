import { Link } from "react-router-dom";
import classNames from "classnames";
import { Content } from "../utils";

type NavItemType = {
  content: Content;
  index: number;
  handleActive: (index: number) => void;
};

const NavItem = ({ content, index, handleActive }: NavItemType) => {
  const Icon = content.active ? content.icon_active : content.icon_inactive;

  return (
    <li
      className={classNames("px-9 transition-all border-l-4 hover:text-white", {
        "border-red-700 text-white font-medium": content.active,
        "border-transparent": !content.active,
      })}
    >
      <div
        onClick={() => {
          handleActive(index);
        }}
        className="flex transition-all space-x-3 items-center"
      >
        <Icon
          className={classNames("h-6 w-6", {
            "text-red-700": content.active,
          })}
        />
        <Link className="text-base" to={content.nav.toLocaleLowerCase()}>
          {content.nav}
        </Link>
      </div>
    </li>
  );
};

export default NavItem;
