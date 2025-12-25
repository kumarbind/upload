import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState({
    users: false,
    leads: false,
    settings: false,
  });

  const toggleMenu = (key) => {
    setOpenMenu((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div
      className="bg-dark text-white d-flex flex-column vh-100 position-sticky top-0"
      style={{ width: "200px" }}
    >
      {/* Logo */}
      <div className="p-4 border-bottom text-center">
        <h4 className="fw-bold mb-0">
          <span className="text-primary">Admin</span> Panel
        </h4>
      </div>

      {/* Menu */}
      <ul className="nav flex-column px-3 mt-3 flex-grow-1">

        {/* Dashboard */}
        <li className="nav-item mb-2">
          <Link
            to="/main/admin/dashboard"
            className={`nav-link d-flex align-items-center gap-3 rounded px-3 py-2 text-white ${
              location.pathname === "/main/admin/dashboard" ? "bg-primary" : ""
            }`}
          >
            <FaTachometerAlt />
            Dashboard
          </Link>
        </li>

        {/* USERS */}
        <li className="nav-item mb-2">
          <div
            onClick={() => toggleMenu("users")}
            className={`nav-link d-flex justify-content-between align-items-center rounded px-3 py-2 text-white cursor-pointer ${
              isActive("/main/admin/users") ? "bg-primary" : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            <span className="d-flex align-items-center gap-3">
              <FaUsers />
              Users
            </span>
            {openMenu.users ? <FaChevronDown /> : <FaChevronRight />}
          </div>

          {openMenu.users && (
            <ul className="nav flex-column ms-4 mt-2">
              <li className="nav-item mb-1">
                <Link
                  to="/main/admin/users"
                  className={`nav-link text-white small ${
                    location.pathname === "/main/admin/users" ? "text-primary" : ""
                  }`}
                >
                  User List
                </Link>
              </li>
              <li className="nav-item mb-1">
                <Link
                  to="/main/admin/users/create"
                  className="nav-link text-white small"
                >
                  Add User
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* LEADS */}
        <li className="nav-item mb-2">
          <div
            onClick={() => toggleMenu("leads")}
            className={`nav-link d-flex justify-content-between align-items-center rounded px-3 py-2 text-white ${
              isActive("/main/admin/leads") ? "bg-primary" : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            <span className="d-flex align-items-center gap-3">
              <FaShoppingCart />
              Leads
            </span>
            {openMenu.leads ? <FaChevronDown /> : <FaChevronRight />}
          </div>

          {openMenu.leads && (
            <ul className="nav flex-column ms-4 mt-2">
              <li className="nav-item mb-1">
                <Link
                  to="/main/admin/leads"
                  className={`nav-link text-white small ${
                    location.pathname === "/main/admin/leads" ? "text-primary" : ""
                  }`}
                >
                  All Leads
                </Link>
              </li>
              <li className="nav-item mb-1">
                <Link
                  to="/main/admin/leads/new"
                  className="nav-link text-white small"
                >
                  New Lead
                </Link>
              </li>
            </ul>
          )}
        </li>

         {/* Campains */}
        <li className="nav-item mb-2">
          <div
            onClick={() => toggleMenu("Campains")}
            className={`nav-link d-flex justify-content-between align-items-center rounded px-3 py-2 text-white ${
              isActive("/main/admin/campaigns") ? "bg-primary" : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            <span className="d-flex align-items-center gap-3">
              <FaShoppingCart />
              Campains
            </span>
            {openMenu.Campains ? <FaChevronDown /> : <FaChevronRight />}
          </div>

          {openMenu.Campains && (
            <ul className="nav flex-column ms-4 mt-2">
              <li className="nav-item mb-1">
                <Link
                  to="/main/admin/campaigns"
                  className={`nav-link text-white small ${
                    location.pathname === "/main/admin/campaigns" ? "text-primary" : ""
                  }`}
                >
                  All Campains
                </Link>
              </li>
              <li className="nav-item mb-1">
                <Link
                  to="/main/admin/campaigns/create"
                  className="nav-link text-white small"
                >
                  New Campain
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* SETTINGS */}
        <li className="nav-item mb-2">
          <div
            onClick={() => toggleMenu("settings")}
            className={`nav-link d-flex justify-content-between align-items-center rounded px-3 py-2 text-white ${
              isActive("/main/admin/settings") ? "bg-primary" : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            <span className="d-flex align-items-center gap-3">
              <FaCog />
              Settings
            </span>
            {openMenu.settings ? <FaChevronDown /> : <FaChevronRight />}
          </div>

          {openMenu.settings && (
            <ul className="nav flex-column ms-4 mt-2">
              <li className="nav-item mb-1">
                <Link
                  to="/main/admin/settings/profile"
                  className="nav-link text-white small"
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item mb-1">
                <Link
                  to="/main/admin/settings/security"
                  className="nav-link text-white small"
                >
                  Security
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Logout */}
      <div className="p-3 border-top">
        <button className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
