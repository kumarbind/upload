import React from "react";
import { useAuth } from "../../../context/AuthContext";
import Breadcrumbs from "../common/Breadcrumbs";
import { FaUserCircle, FaSignOutAlt, FaUser } from "react-icons/fa";

const Topbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-white border-bottom shadow-sm px-4 py-2 d-flex justify-content-between align-items-center">
      
      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Right Section */}
      <div className="d-flex align-items-center gap-3">
        
        {/* Greeting */}
        <span className="text-muted small d-none d-md-block">
          Welcome back,
          <strong className="ms-1 text-dark">{user?.name}</strong>
        </span>

        {/* User Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-light d-flex align-items-center gap-2 rounded-pill px-3"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaUserCircle size={22} className="text-primary" />
            <span className="fw-semibold small">
              {user?.name?.split(" ")[0]}
            </span>
          </button>

          <ul className="dropdown-menu dropdown-menu-end shadow">
            <li>
              <button className="dropdown-item d-flex align-items-center gap-2">
                <FaUser /> Profile
              </button>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <button
                className="dropdown-item text-danger d-flex align-items-center gap-2"
                onClick={logout}
              >
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Topbar;