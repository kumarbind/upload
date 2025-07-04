// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/Dashboard';
import HomePage from './pages/frontend/MainHome'; // Optional: only if Home.jsx exists
import PortfolioHome from './pages/frontend/PortfolioHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User-facing routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioHome />} />

        {/* Admin routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
