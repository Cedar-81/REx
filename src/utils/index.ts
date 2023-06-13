import { nav_list, Section, NavListType, Content } from "./navlist";
import browseSections from "./browseList";
import { carouselSettings, bannerCarouselSettings } from "./carouselConfig";
import Movie from "./tmdbType";
import {
  fetchMovies,
  getGenreNames,
  fetchGenres,
  getLatestTVSeriesAndMovies,
  searchMovies,
  getMovieDetails,
  getMovieTrailers,
} from "./fetchMovies";

export {
  nav_list,
  fetchMovies,
  browseSections,
  Section,
  carouselSettings,
  bannerCarouselSettings,
  getGenreNames,
  fetchGenres,
  getLatestTVSeriesAndMovies,
  searchMovies,
  getMovieDetails,
  getMovieTrailers,
  type Movie,
  type NavListType,
  type Content,
};
