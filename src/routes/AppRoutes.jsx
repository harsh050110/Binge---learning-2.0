import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import CAE from "../pages/Courses/CAE";
import CAD from "../pages/Courses/CAD";
import Graphics from "../pages/Courses/Graphics";
import ThreeD from "../pages/Courses/ThreeD";
import Contact from "../pages/Contact";
import BLStudio from "../pages/BLStudio/BLStudio";
import Footer from "../components/Footer";
import About from "../pages/About";
import PhysicsOfDesign from "../pages/Courses/Physics";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/courses/cae" element={<CAE />} />
      <Route path="/courses/physics" element={<PhysicsOfDesign />} />
      <Route path="/courses/cad" element={<CAD />} />
      <Route path="/courses/graphics" element={<Graphics />} />
      <Route path="/courses/3d" element={<ThreeD />} />
      <Route path="/bl-studio" element={<BLStudio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Footer" element={<Footer/>} />
    </Routes>
  );
};

export default AppRoutes;
