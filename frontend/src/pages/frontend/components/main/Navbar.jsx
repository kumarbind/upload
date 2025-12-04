import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null); // track which dropdown is open

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  const toggleDropdown = (menu) => {
    setOpenDropdown(prev => (prev === menu ? null : menu));
  };

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <FaLaptopCode size={24} />
          <span>WebDevCreators</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav mx-auto align-items-center">
            {/* Services dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onClick={(e) => { e.preventDefault(); toggleDropdown('services'); }}
              >
                Services
              </a>
              <ul className={`dropdown-menu${openDropdown === 'services' ? ' show' : ''}`}>
                <li><a className="dropdown-item" href="#service1" onClick={closeNav}>Web Development</a></li>
                <li><a className="dropdown-item" href="#service2" onClick={closeNav}>App Development</a></li>
                <li><a className="dropdown-item" href="#service3" onClick={closeNav}>Consulting</a></li>
              </ul>
            </li>

            {/* Products dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onClick={(e) => { e.preventDefault(); toggleDropdown('products'); }}
              >
                Products
              </a>
              <ul className={`dropdown-menu${openDropdown === 'products' ? ' show' : ''}`}>
                <li><a className="dropdown-item" href="#product1" onClick={closeNav}>CRM</a></li>
                <li><a className="dropdown-item" href="#product2" onClick={closeNav}>ERP</a></li>
                <li><a className="dropdown-item" href="#product3" onClick={closeNav}>E-commerce</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#contact" className="btn btn-primary btn-sm" onClick={closeNav}>
                Hire developer
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#about" onClick={closeNav}>About</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link" href="#about" onClick={closeNav}>Contact</a>
            </li>
            
          </ul>

          {/* Right aligned items */}
          <ul className="navbar-nav ms-auto align-items-end">
            {/* <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNav}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeNav}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeNav}>Contact</a>
            </li> */}
            <li className="nav-item ms-2">
              <a href="#contact" className="btn btn-primary btn-sm" onClick={closeNav}>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
