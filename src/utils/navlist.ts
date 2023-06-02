import { IconType } from "react-icons";
import {
  MdOutlineExplore,
  MdExplore,
  MdOutlineMovie,
  MdMovie,
  MdOutlineLocalMovies,
  MdLocalMovies,
  MdOutlineGroup,
  MdGroup,
  MdOutlineGroups,
  MdGroups,
  MdLogout,
} from "react-icons/md";
import { RiMovieLine, RiMovieFill } from "react-icons/ri";

export type Content = {
  nav: string;
  active: boolean;
  icon_inactive: IconType;
  icon_active: IconType;
  section: Section;
};

export type NavListType = Array<Content>;

export enum Section {
  FEED,
  SOCIALS,
  PROFILE,
}

export const nav_list: NavListType = [
  {
    nav: "Browse",
    active: true,
    icon_inactive: MdOutlineExplore,
    icon_active: MdExplore,
    section: Section.FEED,
  },
  {
    nav: "Movies",
    active: false,
    icon_inactive: MdOutlineMovie,
    icon_active: MdMovie,
    section: Section.FEED,
  },
  {
    nav: "Shows",
    active: false,
    icon_inactive: RiMovieLine,
    icon_active: RiMovieFill,
    section: Section.FEED,
  },
  {
    nav: "Watchlist",
    active: false,
    icon_inactive: MdOutlineLocalMovies,
    icon_active: MdLocalMovies,
    section: Section.FEED,
  },

  {
    nav: "Friends",
    active: false,
    icon_inactive: MdOutlineGroup,
    icon_active: MdGroup,
    section: Section.SOCIALS,
  },
  {
    nav: "Parties",
    active: false,
    icon_inactive: MdOutlineGroups,
    icon_active: MdGroups,
    section: Section.SOCIALS,
  },
  {
    nav: "Logout",
    active: false,
    icon_inactive: MdLogout,
    icon_active: MdLogout,
    section: Section.PROFILE,
  },
];
