import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const linkClasses = "text-gray-600 hover:text-blue-500";
  const activeLinkClasses = "text-blue-500 font-semibold";

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <NavLink to="/">MyApp</NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? activeLinkClasses : linkClasses
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? activeLinkClasses : linkClasses
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? activeLinkClasses : linkClasses
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? activeLinkClasses : linkClasses
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
