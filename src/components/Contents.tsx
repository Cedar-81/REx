import { Route, Routes } from "react-router-dom";
import { Browse } from ".";

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Browse />} />
      <Route path="/about" element={<></>} />
      <Route path="/services" element={<></>} />
      <Route path="/contact" element={<></>} />
    </Routes>
  );
};

export default MainContent;
