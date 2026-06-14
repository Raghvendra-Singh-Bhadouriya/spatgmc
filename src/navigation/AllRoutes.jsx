


import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
// import Packages from "../pages/Packages";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Appointment from "../pages/Appointment";
// import NotFound from "../pages/NotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/services" element={<Services />} />

      {/* <Route path="/packages" element={<Packages />} /> */}

      <Route path="/gallery" element={<Gallery />} />

      <Route path="/contact" element={<Contact />} />

      <Route
        path="/book-appointment"
        element={<Appointment />}
      />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AllRoutes;