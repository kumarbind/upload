import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaChevronDown, FaCode, FaMobile, FaLightbulb, FaShoppingCart, FaChartLine, FaCog, FaUsers, FaPhone } from "react-icons/fa";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => {
    setIsNavCollapsed(true);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(prev => (prev === menu ? null : menu));
  };

  const services = [
    { icon: <FaCode />, name: "Web Development", href: "/services/web-development", color: "#3b82f6" },
    { icon: <FaMobile />, name: "App Development", href: "/services/app-development", color: "#8b5cf6" },
    { icon: <FaLightbulb />, name: "Rank Your websits", href: "/services/consulting", color: "#10b981" },
    { icon: <FaChartLine />, name: "Admissions", href: "/services/digital-marketing", color: "#ef4444" },
    { icon: <FaLightbulb />, name: "Lead Genration", href: "/services/consulting", color: "#10b981" },
    { icon: <FaLightbulb />, name: "Travel with us", href: "/services/consulting", color: "#10b981" },
    { icon: <FaLightbulb />, name: "Consulting", href: "/services/consulting", color: "#10b981" }
  ];

  const products = [
    { icon: <FaUsers />, name: "CRM System", href: "/products/crm", color: "#f59e0b" },
    { icon: <FaCog />, name: "ERP Solution", href: "/products/erp", color: "#ec4899" },
    { icon: <FaShoppingCart />, name: "E-commerce", href: "/products/ecommerce", color: "#06b6d4" },
    { icon: <FaShoppingCart />, name: "Admin Dashboard", href: "/products/ecommerce", color: "#06b6d4" },
    { icon: <FaShoppingCart />, name: "Blogs", href: "/products/ecommerce", color: "#06b6d4" },
    { icon: <FaShoppingCart />, name: "Postst", href: "/products/ecommerce", color: "#06b6d4" },
    { icon: <FaShoppingCart />, name: "Booking System", href: "/products/ecommerce", color: "#06b6d4" },
  ];

  return (
    <motion.nav
      className={`navbar navbar-expand-lg sticky-top ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
      style={{
        background: scrolled 
          ? "rgba(255, 255, 255, 0.95)" 
          : "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.1)" : "none"
      }}
    >
      <div className="container">
        {/* Logo */}
        <motion.a 
          className="navbar-brand d-flex align-items-center gap-2 fw-bold" 
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: "1.3rem"
          }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <FaLaptopCode size={28} style={{ color: "#667eea" }} />
          </motion.div>
          <span>WebDevCreators</span>
        </motion.a>

        {/* Mobile Toggle */}
        <motion.button
          className="navbar-toggler border-0"
          type="button"
          onClick={handleNavCollapse}
          whileTap={{ scale: 0.9 }}
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            borderRadius: "8px"
          }}
        >
          <span className="navbar-toggler-icon" style={{ filter: "brightness(0) invert(1)" }}></span>
        </motion.button>

        {/* Nav Items */}
        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-1">
            
            {/* Services Dropdown */}
            <li className="nav-item dropdown position-relative">
              <div className="d-flex align-items-center">
                
                {/* Main navigation link */}
                <Link
                  to="/services"
                  className="nav-link d-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-semibold"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Services
                </Link>

                {/* Dropdown toggle icon */}
                <motion.span
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDropdown("services");
                  }}
                  animate={{ rotate: openDropdown === "services" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="d-flex align-items-center pe-3"
                  style={{ cursor: "pointer" }}
                >
                  <FaChevronDown size={12} />
                </motion.span>
              </div>

              {/* Dropdown menu */}
              <AnimatePresence>
                {openDropdown === "services" && (
                  <motion.ul
                    className="dropdown-menu border-0 shadow-lg p-2 show"
                    style={{
                      borderRadius: "12px",
                      minWidth: "250px",
                      marginTop: "0.5rem",
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {services.map((service, idx) => (
                      <motion.li key={idx} whileHover={{ x: 5 }}>
                        <Link
                          to={service.href}
                          className="dropdown-item rounded-3 d-flex align-items-center gap-3 p-3"
                          onClick={closeNav}
                          style={{ transition: "all 0.3s ease" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = `${service.color}15`)
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          <div
                            className="d-flex align-items-center justify-content-center rounded-2"
                            style={{
                              width: "35px",
                              height: "35px",
                              background: service.color,
                              color: "white",
                              fontSize: "1rem",
                            }}
                          >
                            {service.icon}
                          </div>
                          <span className="fw-semibold">{service.name}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>


            {/* Products Dropdown */}
            <li className="nav-item dropdown position-relative">
              <motion.a
                className="nav-link d-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-semibold"
                href="/products"
                whileHover={{ backgroundColor: "#f3f4f6" }}
                style={{ cursor: "pointer", transition: "all 0.3s ease" }}
              >
                {/* Main link */}
                <span>Products</span>

                {/* Chevron toggle */}
                <motion.span
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDropdown("products");
                  }}
                  animate={{ rotate: openDropdown === "products" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FaChevronDown size={12} />
                </motion.span>
              </motion.a>

              <AnimatePresence>
                {openDropdown === "products" && (
                  <motion.ul
                    className="dropdown-menu border-0 shadow-lg p-2 show"
                    style={{
                      borderRadius: "12px",
                      minWidth: "250px",
                      marginTop: "0.5rem",
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {products.map((product, idx) => (
                      <motion.li key={idx} whileHover={{ x: 5 }}>
                        <a
                          className="dropdown-item rounded-3 d-flex align-items-center gap-3 p-3"
                          href={product.href}
                          onClick={closeNav}
                          style={{ transition: "all 0.3s ease" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = `${product.color}15`)
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          <div
                            className="d-flex align-items-center justify-content-center rounded-2"
                            style={{
                              width: "35px",
                              height: "35px",
                              background: product.color,
                              color: "white",
                              fontSize: "1rem",
                            }}
                          >
                            {product.icon}
                          </div>
                          <span className="fw-semibold">{product.name}</span>
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>


            {/* Other Nav Items */}
            <li className="nav-item">
              <motion.a 
                className="nav-link px-3 py-2 rounded-3 fw-semibold" 
                href="/portfolio" 
                onClick={closeNav}
                whileHover={{ backgroundColor: "#f3f4f6" }}
              >
                Portfolio
              </motion.a>
            </li>

            <li className="nav-item">
              <motion.a 
                className="nav-link px-3 py-2 rounded-3 fw-semibold" 
                href="#about" 
                onClick={closeNav}
                whileHover={{ backgroundColor: "#f3f4f6" }}
              >
                About
              </motion.a>
            </li>

            <li className="nav-item">
              <motion.a 
                className="nav-link px-3 py-2 rounded-3 fw-semibold" 
                href="#contact" 
                onClick={closeNav}
                whileHover={{ backgroundColor: "#f3f4f6" }}
              >
                Contact
              </motion.a>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2 mt-3 mt-lg-0">
            <li className="nav-item">
              <motion.a 
                href="/hiredevelopers" 
                className="btn btn-sm d-inline-flex align-items-center gap-2 px-4 py-2 fw-semibold"
                onClick={closeNav}
                style={{
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)"
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 6px 20px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaUsers size={14} />
                <span>Hire Developer</span>
              </motion.a>
            </li>

            <li className="nav-item">
              <motion.a 
                href="/login" 
                className="btn btn-sm px-4 py-2 fw-semibold"
                onClick={closeNav}
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)"
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;