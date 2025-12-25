// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRoutes from "./routes/AdminRoutes";
import HomePageRoutes from "./routes/HomePageRoutes";

function App() {
  return (
    <BrowserRouter>
      <AdminRoutes />
      <HomePageRoutes />
    </BrowserRouter>
  );
}

export default App;
