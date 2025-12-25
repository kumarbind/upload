import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/frontend/MainHome';
import PortfolioHome from '../pages/frontend/PortfolioHome';
export default function AdminHomePageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<PortfolioHome />} />
      <Route path="*" element={null} />
    </Routes>
  );
}
