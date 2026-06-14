import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Packages", path: "/packages" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/tgmcspa-logo.png"
                alt="TGMC SPA"
                className="w-12 h-12 object-contain"
              />

              <h1 className="text-xl md:text-2xl font-bold text-[#C8A96B]">
                TGMC SPA
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium transition duration-300 ${
                      isActive
                        ? "text-[#C8A96B]"
                        : "text-white hover:text-[#C8A96B]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              to="/book-appointment"
              className="hidden lg:flex items-center justify-center bg-[#C8A96B] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
            >
              Book Appointment
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[300px] bg-[#111111] z-50 transform transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
          >
            <img
              src="/tgmcspa-logo.png"
              alt="TGMC SPA"
              className="w-10 h-10 object-contain"
            />

            <h2 className="text-xl font-bold text-[#C8A96B]">
              TGMC SPA
            </h2>
          </Link>

          <button
            className="text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col gap-6 p-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive
                    ? "text-[#C8A96B]"
                    : "text-white hover:text-[#C8A96B]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/book-appointment"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-[#C8A96B] text-black text-center py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Book Appointment
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;