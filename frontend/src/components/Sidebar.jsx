// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="bg-dark text-white p-3" style={{ width: '250px', minHeight: '100vh' }}>
    <h4>Admin</h4>
    <ul className="nav flex-column">
      <li className="nav-item"><Link className="nav-link text-white" to="/dashboard">Dashboard</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/users">Users</Link></li>
    </ul>
  </div>
);

export default Sidebar;
