import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/frontend/MainHome';
import Services from '../pages/frontend/Services';
import ServiceDetails from '../pages/frontend/ServiceDetails';
import Products from '../pages/frontend/Products';
import ProductDetails from '../pages/frontend/ProductDetails';
import HireDeveloper from '../pages/frontend/HireDeveloper';
import Login from '../pages/frontend/Login';
import CreateDemo from '../pages/frontend/CreateDemo';
import DemoPreview from '../pages/frontend/DemoPreview';
import ViewDemo from '../pages/frontend/ViewDemo';
// import MyDashboard from '../pages/frontend/MyDashboard';
import PortfolioHome from '../pages/frontend/PortfolioHome';
// import Details from '../pages/frontend/Details';

export default function AdminHomePageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />

      <Route path="/products" element={<Products />} />
      <Route path="/products/:slug" element={<ProductDetails />} />

      <Route path="/hiredevelopers" element={<HireDeveloper />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createDemo" element={<CreateDemo />} />
      <Route path="/demoPreview" element={<DemoPreview />} />
      <Route path="/viewDemo" element={<ViewDemo />} />
      {/* <Route path="/myDashboard" element={<MyDashboard />} /> */}
      <Route path="/portfolio" element={<PortfolioHome />} />
      {/* <Route path="/details/:id?" element={<Details />} /> */}
      <Route path="*" element={null} />
    </Routes>
  );
}
