import { Route, Routes } from "react-router-dom";
import { Browse, MoviePage, Movies, Search, Shows } from ".";

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Browse />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="/:type/:id/:title" element={<MoviePage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/shows" element={<Shows />} />
    </Routes>
  );
};

export default MainContent;
